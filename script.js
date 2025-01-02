var arr = [
    {
        
        dp: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1726944350425-9109d1c0806d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
        username: 'yashi'
    },
    {
        
        dp: 'https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww',
        story:  'https://images.unsplash.com/photo-1731516885256-9890700f9862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D',
         username: 'tanu'
    },

    {
        
        dp: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww',
        story : 'https://images.unsplash.com/photo-1726766406089-0308c800b6b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fHw%3D ',
        username: 'isha'
    },
    {
        
        dp: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww',
        story: 'https://plus.unsplash.com/premium_photo-1699566447802-0551b84a186d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDV8fHxlbnwwfHx8fHw%3D ',
         username: 'illya'
    },

    {
        
        dp: 'https://plus.unsplash.com/premium_photo-1669704098824-3bb06bb771f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1vZGVsfGVufDB8fDB8fHww',
        story : 'https://images.unsplash.com/photo-1726758267577-f8ca9449ed6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8fHw%3D ',
        username: 'priya'
    },

    {
       
        dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D',
        story: 'https://images.unsplash.com/photo-1726677644019-c010b789cf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njh8fHxlbnwwfHx8fHw%3D ',
        username: 'cheery'
    },


    
];
var sum = ''

arr.forEach(function(elem,idx){
    sum = sum + `<div class="story"> 
          <img id=${idx} src="${elem.dp}" alt="">
        </div>`
  
})
 
 var stories = document.querySelector('#stories')
 var full = document.querySelector('#full')
 stories.innerHTML = sum

 stories.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]
    
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
 })