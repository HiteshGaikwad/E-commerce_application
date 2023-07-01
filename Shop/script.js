
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

let mens_collection=[];
  let womens_collectons=[];
  let jewellery_collection=[];
  let electronic_collection=[];

  const mens=document.getElementById("mens_id");
  const women= document.getElementById("womens_id");
  const jewellery= document.getElementById("jewellery_id");
  const electronic= document.getElementById("electronic_id");

async function loadData(){

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

  //mens collection
  let title= document.createElement("div");
  title.className="title";
  title.innerText=`${mens_collection[0].category}`;
  mens.append(title);


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
    
      mens.append(items);

      //womens collections
      let women_title= document.createElement("div");
  women_title.className="title";
  women_title.innerText=`${womens_collectons[0].category}`;
  women.append(women_title);

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
    
      women.append(women_items);


    //Jewellery collections
    let jewellery_title= document.createElement("div");
    jewellery_title.className="title";
    jewellery_title.innerText=`${jewellery_collection[0].category}`;
  jewellery.append(jewellery_title);

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
    
      jewellery.append(jewellery_items);

      //Electronic collections
      let electronic_title= document.createElement("div");
      electronic_title.className="title";
      electronic_title.innerText=`${electronic_collection[0].category}`;
  electronic.append(electronic_title);

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
    
      electronic.append(electronic_items);

    }
  catch(error){
    alert("Something went wrong");
  }
}

const main_section= document.getElementById("main-section-id");


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




