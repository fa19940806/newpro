<template>
    <div>
        我是新闻页面
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
           
        }
    },
    mounted:function(){
        axios
      .get('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
      .then(function (response) {
    console.log(response);
  })
    }
    
}
</script>
