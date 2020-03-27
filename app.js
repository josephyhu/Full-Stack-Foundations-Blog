new Vue({
  el: '#app',
  data: {
    title: 'Full Stack Foundations Blog'
  }
});

console.log(fetch('https:/localhost:8000/api/v1/posts/1'))
