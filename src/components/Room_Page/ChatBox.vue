<template>
  <div id="chat">
    <!-- :icons="icons" -->
    <beautiful-chat
      :participants="participants"
      :title-image-url="titleImageUrl"
      :on-message-was-sent="onMessageWasSent"
      :message-list="messageList"
      :new-messages-count="newMessagesCount"
      :is-open="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :show-emoji="true"
      :show-file="true"
      :show-edition="true"
      :show-deletion="true"
      :deletion-confirmation="true"
      :show-typing-indicator="showTypingIndicator"
      :show-launcher="true"
      :show-close-button="true"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :disable-user-list-toggle="false"
      :message-styling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>


<script>
import { baseImageUrl } from "../../api/base";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import user from "../../store/user";
// import category from "../../store/category";
import { roomApi } from "../../api/apiServices";
export default {
  name: "Chat",
  data() {
    return {
      client: null,
      participants: [
        // {
        //   id: "user1",
        //   name: "Matteo",
        //   imageUrl:
        //     "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4",
        // },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
        "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        { type: "text", author: `me`, data: { text: `Say yes!` } },
        { type: "text", author: `user1`, data: { text: `No.` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          // bg: "#4e8cff",
          bg: "#232931",
          text: "#ffffff",
        },
        launcher: {
          // bg: "#4e8cff",
          bg: "#232931",
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          // bg: "#4e8cff",
          bg: "#232931",
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  computed: {
    selfName() {
      return user.getters.getUsername;
    },
    selfId() {
      return user.getters.getId;
    },
    selfImage() {
      return user.getters.getImage;
    },
  },
  mounted() {
    // Connect websocket endpoint
    const connection = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(connection);
    let jwt = localStorage.getItem("jwt");

    //Get All User
    roomApi
      .getAllUsersInSpace(this.$route.params.category, {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
      .then((response) => {
        console.log(response.data);

        response.data.map((value) => {
          value.imageUrl = `${baseImageUrl}/${value.id}/${value.imgUrl}`;
          return value;
        });
        this.participants = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    stomp.connect(
      {
        Authorization: `Bearer ${jwt}`,
        Space: this.$route.params.category,
      },
      (frame) => {
        console.log(frame);
        stomp.subscribe(
          `/public/${this.$route.params.category}`,
          (message) => {
            let tempMess = JSON.parse(message.body);
            if (tempMess.senderId === this.selfId) return;
            this.messageList.push({
              type: "text",
              author: tempMess.senderId,
              data: { text: `${tempMess.content}` },
            });
          },
          {}
        );

        stomp.subscribe(
          `/public/special/${this.$route.params.category}`,
          (specialMessage) => {
            let json_mess = JSON.parse(specialMessage.body);
            switch (json_mess["type"]) {
              case "JOIN":
                this.participants.push({
                  id: json_mess["senderId"],
                  name: json_mess["senderName"],
                  imageUrl: `${baseImageUrl}/${json_mess["senderId"]}/${json_mess["image"]}`,
                });
                break;
              case "LEAVE":
                this.participants = this.participants.filter((value) => {
                  return value["id"] != json_mess["senderId"];
                });
                break;
            }
          },
          {}
        );
      }
    );
    this.client = stomp;
    user.commit("setStompClient", stomp);
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text },
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
      console.log(message.data.text);
      if (this.client != null) {
        this.client.send(
          `/app/message/${this.$route.params.category}`,
          JSON.stringify({
            content: message.data.text,
            senderId: this.selfId,
          }),
          {}
        );
      }
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log("Emit typing event");
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
  },
};
</script>


