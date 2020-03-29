new Vue({
  el: '#app',
  data: {
    title: 'Full Stack Foundations Blog'
  }
});

new Vue({
  el: '#posts',
  data: {
      posts: ''
  },
  mounted() {
    fetch('http://localhost:8000/api/v1/posts')
      .then(response => response.json())
      .then(data => this.posts = data.posts)
  }
});
