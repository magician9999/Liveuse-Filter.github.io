const result=document.getElementById('user-list');
const filter=document.getElementById('search');
const listItems=[];

getData()

filter.addEventListener('input',(e)=>filterData(e.target.value))
async function getData() {
    const res= await fetch("https://randomuser.me/api/?results=50");
   
    const {results} = await res.json();
    // clear results
    //console.log(results);
    result.innerHTML='';

    results.forEach( (user)=>
        {   //console,log(user)
            const li=document.createElement('li');

            listItems.push(li)

            li.innerHTML = `<img src="${user.picture.medium }" alt="${user.name.last}">
            <div class="user-info">
               <h4>${user.name.first} ${user.name.last}</h4>
               <p>${user.location.city},${user.location.country}</p>
            </div> `
            //console.log(li);

            result.appendChild(li);
        })
}

function filterData(searchTerm)
{
     listItems.forEach((item)=>
     {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
        {
            item.classList.remove('hide')
        }
        else
        {
            item.classList.add('hide')
        }
     })
}

9