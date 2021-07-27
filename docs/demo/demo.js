 let data = {
  name: 'zhijian',
  age: '18',
  hei: 'hhh'
 }
 Object.keys(data).forEach((key) => {
  fn(key, data[key])
 })

 function fn(key) {
  data[key] = 'hiehei'
 }

 console.log(data)