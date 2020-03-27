new Vue({
  el: '#app',
  data: {
    title: 'Full Stack Foundations Blog'
  }
});

fetch('http://localhost:8000/api/v1/posts')
  .then(res => {
    res.json()
    console.log(res)
  })
