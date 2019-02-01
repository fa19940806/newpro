<template>
  <div>
      <div >

      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsArr: []
    };
  },
  mounted: function() {
      var that = this.newsArr
    axios
      .get("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
      .then(function(response) {
        if (response.status === 200) {
          console.log(response);
          that = response.data.result;
          console.log(that);
        }else{
            console.log("请求失败!")
        }
      });
  }
};
</script>
