const partnerPage = async () => {

    const mainEl = document.getElementById("main");

    const partnerPageContent = `
    <h2 id="partners-title">Our Partners</h2>
    <ul id="partner-tiers">
     <li id="first-partner-tier">
       <h2 id="tier-one-partners-title">Tier One Partners</h2>
       <ul id="tier-one-partners">
         <li class="tier-one-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-one-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-one-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
       </ul>
     </li>
     <li id="second-partner-tier">
       <h2 id="tier-two-partners-title">Tier Two Partners</h2>
       <ul id="tier-two-partners">
         <li class="tier-two-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-two-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-two-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-two-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-two-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
       </ul>
     </li>
     <li id="third-partner-tier">
       <h2 id="tier-three-partners-title">Tier Three Partners</h2>
       <ul id="tier-three-partners">
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
         <li class="tier-three-partner">
           <img class="partner-image" src="./assets/images/placeholder_300x300.jpeg">
         </li>
       </ul>
     </li>
    </ul>
     <aside id="copyright">
       <p>Copyright © 2023 Organization Name</p>
     </aside>
    `

    mainEl.innerHTML = partnerPageContent;
  };
  
  export default partnerPage;
  