<template>
  <div>
    <p>Trung</p>
    <button @click="clickonme">Send</button>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
export default {
  name: "Chat",
  data() {
    
    return {
      client: null,
    };
  },
  created() {
    const connection = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(connection);
    stomp.connect({
      "Authorization": "Bearer ".localStorage.getItem("jwt"),
    },
      (frame) => {
        console.log(frame);
        stomp.subscribe("/topic/greetings", (greeting) => {
          console.log(JSON.parse(greeting.body).content);
        }, {});
        
        this.client = stomp; 
      }
    );
  },
  methods: {
    clickonme() {
      this.client.send("/app/hello", JSON.stringify({ name: "Trung" }), {});
    },
  },
};
</script>