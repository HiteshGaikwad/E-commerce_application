
const home_btn= document.getElementById("home");
const login_btn= document.getElementById("login");
const signup_btn= document.getElementById("signup");
const myCart_btn= document.getElementById("my_cart");
const profile_btn= document.getElementById("profile");

profile_btn.addEventListener("click",()=>{
  location.href="../Profile";
})
myCart_btn.addEventListener("click",()=>{
  location.href="../Cart";
})
home_btn.addEventListener("click",()=>{
  location.href="../Shop"
})
login_btn.addEventListener("click",()=>{
  location.href="../Login";
})
signup_btn.addEventListener("click",()=>{
  location.href="../SignUp"
})

const url= "https://fakestoreapi.com/products";

const all_filter= document.getElementById("all-filter")
const main_section= document.getElementById("main-section-id");

let mens_collection=[];
  let womens_collectons=[];
  let jewellery_collection=[];
  let electronic_collection=[];


  all_filter.addEventListener("click",allCollections)


async function loadData(){


  all_filter.style.backgroundColor="black";
  all_filter.style.color="white";


  try{
  let response= await fetch(url);
  let result= await response.json();
  
  for(let i=0; i<result.length; i++){
    let card=result[i];
    if(card.category==="men's clothing"){
      mens_collection.push(card);
    } else if(card.category==="jewelery"){
      jewellery_collection.push(card);
    } else if(card.category==="electronics"){
      electronic_collection.push(card);
    } else if(card.category==="women's clothing"){
      womens_collectons.push(card);
    }
  }

  allCollections();

    }
  catch(error){
    alert("Something went wrong");
    console.trace(error)
  }
}

function allCollections(){

  all_filter.style.backgroundColor="black";
  all_filter.style.color="white";

  men_filter.style.backgroundColor="white";
  men_filter.style.color="black";

  women_filter.style.backgroundColor="white"
  women_filter.style.color="black"

  jewellery_filter.style.backgroundColor="white"
  jewellery_filter.style.color="black"

electronic_filter.style.backgroundColor="white";
electronic_filter.style.color="black";

  main_section.innerHTML=" ";

  //mens collection

  let men_section= document.createElement("section");
  men_section.className="mens";
  men_section.id="mens_id";

  let title= document.createElement("div");
  title.className="title";
  title.innerText=`${mens_collection[0].category}`;
  men_section.append(title);


  let items= document.createElement("div");
    items.className="items";
    for(let i=0; i<mens_collection.length; i++){
      let image=mens_collection[i].image;
      let price= mens_collection[i].price;
      let rating= mens_collection[i].rating.rate;
      let vote_count= mens_collection[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      items.append(item);
    }
    
      men_section.append(items);
      main_section.append(men_section)

      //womens collections
      let women_section= document.createElement("section");
        women_section.className="womens";
        women_section.id="womens_id";

      let women_title= document.createElement("div");
  women_title.className="title";
  women_title.innerText=`${womens_collectons[0].category}`;
  women_section.append(women_title);

  let women_items= document.createElement("div");
    women_items.className="items";
    for(let i=0; i<womens_collectons.length; i++){
      let image=womens_collectons[i].image;
      let price= womens_collectons[i].price;
      let rating= womens_collectons[i].rating.rate;
      let vote_count= womens_collectons[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      women_items.append(item);
    }
    
      // women.append(women_items);
      women_section.append(women_items);
      main_section.append(women_section)


    //Jewellery collections
    let jewellery_section= document.createElement("section");
    jewellery_section.className="jewellery";
    jewellery_section.id="jewellery_id";
    
    let jewellery_title= document.createElement("div");
    jewellery_title.className="title";
    jewellery_title.innerText=`${jewellery_collection[0].category}`;
    jewellery_section.append(jewellery_title);

  let jewellery_items= document.createElement("div");
  jewellery_items.className="items";
    for(let i=0; i<jewellery_collection.length; i++){
      let image=jewellery_collection[i].image;
      let price= jewellery_collection[i].price;
      let rating= jewellery_collection[i].rating.rate;
      let vote_count= jewellery_collection[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      jewellery_items.append(item);
    }
    
    jewellery_section.append(jewellery_items);
    main_section.append(jewellery_section);

      //Electronic collections

      let electronic_section= document.createElement("section");
      electronic_section.className="electronic";
      electronic_section.id="electronic_id";

      let electronic_title= document.createElement("div");
      electronic_title.className="title";
      electronic_title.innerText=`${electronic_collection[0].category}`;
      electronic_section.append(electronic_title);

  let electronic_items= document.createElement("div");
    electronic_items.className="items";
    for(let i=0; i<electronic_collection.length; i++){
      let image=electronic_collection[i].image;
      let price= electronic_collection[i].price;
      let rating= electronic_collection[i].rating.rate;
      let vote_count= electronic_collection[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      electronic_items.append(item);
    }
    
    electronic_section.append(electronic_items);
    main_section.append(electronic_section);

}



const men_filter= document.getElementById("men-filter");
const women_filter= document.getElementById("women-filter");
const jewellery_filter= document.getElementById("jewellery-filter");
const electronic_filter= document.getElementById("electronics-filter");

// let selectedFilter= all_filter;


men_filter.addEventListener("click",()=>{

  all_filter.style.backgroundColor="white";
  all_filter.style.color="black";

  men_filter.style.backgroundColor="black";
  men_filter.style.color="white";

  women_filter.style.backgroundColor="white"
  women_filter.style.color="black"

  jewellery_filter.style.backgroundColor="white"
  jewellery_filter.style.color="black"

electronic_filter.style.backgroundColor="white";
electronic_filter.style.color="black";


  main_section.innerHTML="";

  let title= document.createElement("div");
  title.className="title";
  title.innerText=`${mens_collection[0].category}`;
  main_section.append(title);


  let items= document.createElement("div");
    items.className="items";
    for(let i=0; i<mens_collection.length; i++){
      let image=mens_collection[i].image;
      let price= mens_collection[i].price;
      let rating= mens_collection[i].rating.rate;
      let vote_count= mens_collection[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      items.append(item);
    }
    main_section.append(items);
})


women_filter.addEventListener("click",()=>{

  all_filter.style.backgroundColor="white";
  all_filter.style.color="black";

  women_filter.style.backgroundColor="black";
  women_filter.style.color="white"

  men_filter.style.backgroundColor="white";
  men_filter.style.color="black";

  jewellery_filter.style.backgroundColor="white"
  jewellery_filter.style.color="black"

  electronic_filter.style.backgroundColor="white"
  electronic_filter.style.color="black"

  main_section.innerHTML="";

  let women_title= document.createElement("div");
  women_title.className="title";
  women_title.innerText=`${womens_collectons[0].category}`;
  main_section.append(women_title);

  let women_items= document.createElement("div");
    women_items.className="items";
    for(let i=0; i<womens_collectons.length; i++){
      let image=womens_collectons[i].image;
      let price= womens_collectons[i].price;
      let rating= womens_collectons[i].rating.rate;
      let vote_count= womens_collectons[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      women_items.append(item);
    }
    
      main_section.append(women_items);
})

jewellery_filter.addEventListener("click",()=>{

  all_filter.style.backgroundColor="white";
  all_filter.style.color="black";

  women_filter.style.backgroundColor="white";
  women_filter.style.color="black"

  men_filter.style.backgroundColor="white";
  men_filter.style.color="black";

  jewellery_filter.style.backgroundColor="black"
  jewellery_filter.style.color="white"

  electronic_filter.style.backgroundColor="white"
  electronic_filter.style.color="black"

  main_section.innerHTML="";

  let jewellery_title= document.createElement("div");
    jewellery_title.className="title";
    jewellery_title.innerText=`${jewellery_collection[0].category}`;
  main_section.append(jewellery_title);

  let jewellery_items= document.createElement("div");
  jewellery_items.className="items";
    for(let i=0; i<jewellery_collection.length; i++){
      let image=jewellery_collection[i].image;
      let price= jewellery_collection[i].price;
      let rating= jewellery_collection[i].rating.rate;
      let vote_count= jewellery_collection[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      jewellery_items.append(item);
    }
    
      main_section.append(jewellery_items);
})

electronic_filter.addEventListener("click",()=>{

  all_filter.style.backgroundColor="white";
  all_filter.style.color="black";


  women_filter.style.backgroundColor="white";
  women_filter.style.color="black"

  men_filter.style.backgroundColor="white";
  men_filter.style.color="black";

  jewellery_filter.style.backgroundColor="white"
  jewellery_filter.style.color="black"

  electronic_filter.style.backgroundColor="black"
  electronic_filter.style.color="white"

  main_section.innerHTML="";

  let electronic_title= document.createElement("div");
      electronic_title.className="title";
      electronic_title.innerText=`${electronic_collection[0].category}`;
  main_section.append(electronic_title);

  let electronic_items= document.createElement("div");
    electronic_items.className="items";
    for(let i=0; i<electronic_collection.length; i++){
      let image=electronic_collection[i].image;
      let price= electronic_collection[i].price;
      let rating= electronic_collection[i].rating.rate;
      let vote_count= electronic_collection[i].rating.count;
      let item= document.createElement("div");
      item.className="item";
      let num= `
      <img src="${image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price">$${price}</div>
                <div class="sized">S,M,L</div>
                  </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
            <div class="row">Rating: ${rating} (${vote_count})</div>
          </div>
       <button id="addBtn">Add to Cart</button>
      </div>
      `
      item.innerHTML=num;
      electronic_items.append(item);
    }
    
      main_section.append(electronic_items);
})




