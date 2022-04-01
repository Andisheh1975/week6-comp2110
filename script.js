/*function briefview(targetid , people) {
     let target = document.getElementById(targetid);

     let list="<ul>";

     for(let i=0; i<people.length; i++){
         list += "<li>" + people[i].name + "</li>";
     }
         list+= "</ul>"
         target.innerHTML = list;
     
   
    }*/
    const briefView = (people)=> {

    const template = Handlebars.compile(`
        <ul>
        {{#each people}}
        <li>{{name}} 
        </li>
        {{/each}}
        </ul>
        `);

        let target = document.getElementById('people');
        let briefView =template({people:people})
        
        target.innerHTML= briefView;

    }
    const detailedView = (people)=> {

        const template = Handlebars.compile(`
            <ul>
            {{#each people}}
            <li> {{age}} {{eyecolour}} {{company}} {{email}} {{phone}}
             {{address}} {{favouriteFruit}} <img width=100 src={{avatar}}>
            </li>
            {{/each}}
            </ul>
            `);
            /*function briefView(id,listPeople){
            document.getElementById(id).innerHTML=personTemplate({people:listPeople});
            }
            function detailedView(id,listPeople){
                document.getElementById.innerHTML=detailedTemplate({people:listPeople})
            }*/
            let target = document.getElementById('people');
            let detailed =template({people: people})
            
            target.innerHTML= detailed; 

    
    }
    console.log("onclick is working")
 
       /* document.getElementById("switch").onclick=function(){
            briefView(people);
        }*/
        
    let currentView=briefView; //assign function to variable
    function switchviwes(){
        if (currentView===briefView){
            currentView=detailedView;
        }
        else {
         currentView=briefView;
        }
        currentView("people", people);
        }
    

  

       
       
       
   
    
   
        
                

    window.onload = function() {
      /*currentView("people", people);
      document.getElementById("switch").onclick=switchViews;*/ 
     briefView(people); 

     detailedView(people);
     
        
    }    
 


