const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('.todoItem span')
const todoComplete = document.querySelectorAll('.todoItem span.completed')

Array.from(deleteBtn).forEach((el)=>{ //delete the arrays
    el.addEventListener('click', deleteTodo)
})
Array.from(todoItem).forEach((el)=>{ //delete the arrays
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', undo)
})
async function deleteTodo(){
    const todoText = this.parentNode.childNodes[1].innerText                 //no idea text is [1]
    try{
            const response = await fetch('deleteTodo', {                    //fetch to our database
                method: 'delete',
                headers: {'Content-type': 'application/json'},                   // where you are getting your request
                body: JSON.stringify({
                    'rainbowUnicorn': todoText
                })
            })

                const data= await response.json()
                console.log(data)
                location.reload()
    } catch(err){
        console.log(err)

    }

}

async function markComplete(){
    const todoText = this.parentNode.childNodes[1].innerText                 //no idea text is [1]
    try{
            const response = await fetch('markComplete', {                    //fetch to our database
                method: 'put',
                headers: {'Content-type': 'application/json'},                   // where you are getting your request
                body: JSON.stringify({
                    'rainbowUnicorn': todoText
                
                })
            })
            const data = await response.json()
                    console.log(data)
                    location.reload()
                }catch(err){
                    console.log(err)
                }
            }
            

            async function undo(){
                const todoText = this.parentNode.childNodes[1].innerText
                try{
                    const response = await fetch('undo', {
                        method: 'put',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({
                            'rainbowUnicorn': todoText
                        })
                    })
                    const data = await response.json()
                    console.log(data)
                    location.reload()
                }catch(err){
                    console.log(err)
                }
            }
        
    