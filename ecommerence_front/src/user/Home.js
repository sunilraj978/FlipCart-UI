import { Link,useHistory} from 'react-router-dom'
import React from 'react'

import '../css/home.css'


const Home = ()=>{
  const history = useHistory()
  const Hook = (e)=>{
    e.preventDefault()
    history.push("/display")
  }
  return(
    <div>
      <div style={{display:"flex",flexDirection:"row",backgroundColor:"blue",justifyContent:"space-around"}}>
        <div className="img1" >
          <img  src="https://rukminim1.flixcart.com/www/816/816/promos/15/10/2020/6d8eeab8-a259-4854-be04-cfd8581006af.png?q=90" style={{width:"300px"}} alt="" />
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img onClick={(e)=>Hook(e)} src="https://rukminim1.flixcart.com/www/200/200/promos/09/10/2020/59b907c3-57b5-403d-8ebe-cd556b19acc6.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Mobile</p>
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img src="https://rukminim1.flixcart.com/www/200/200/promos/09/10/2020/806f0db9-7416-4170-9257-3e0809a26840.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Electronics</p>
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img src="https://rukminim1.flixcart.com/www/200/200/promos/09/10/2020/e772b3f0-6031-49f5-8c9c-49702c3e877f.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Fashion</p>
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img src="https://rukminim1.flixcart.com/www/200/200/promos/09/10/2020/7cc8723e-cba4-4e90-949c-c6f9ca1c9912.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Tv and Application</p> 
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img src="https://rukminim1.flixcart.com/www/200/200/promos/09/10/2020/ab1d8943-4c6c-4a22-8afa-b035344c5ad3.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Beauty and Toys</p>
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img src="https://rukminim1.flixcart.com/www/200/200/promos/11/10/2020/53268855-4d7f-45b7-ab9c-bcc6adcc88cc.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Home Accessories</p> 
        </div>
        <div className="images" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img src="https://rukminim1.flixcart.com/www/200/200/promos/11/10/2020/0df0a5b6-c9a7-49e0-b525-6685fd4f8243.png?q=90" style={{width:"100px"}} alt="" />
          <p style={{color:"white"}}>Furnitures</p> 
        </div>
      </div>
      <div>
        <img style={{height:"70px",width:"100%"}} src="https://rukminim1.flixcart.com/www/3376/3376/promos/09/10/2020/b29030e5-64e8-4016-a8b1-d95d3f604149.jpg?q=90" alt="" />
      </div>
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active" data-interval="2000">
      <img src="https://www.federalbank.co.in/documents/10180/24194772/Flipkart+WEB-01.jpg/62cd4749-5d32-af0a-43be-0eb382f36688?t=1593859549879" style={{width:"100px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="https://storiesflistgv2.azureedge.net/stories/2017/09/bbdschedule_mainbanner2-59bfb1e3e37b8.jpg" style={{width:"400px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn0.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=900,q=90/topics/photos/1195593/original/Exciting-offers-on-Home-_-Kitchen-Appliances-and-Electronics-1200-x675.jpg" style={{width:"250px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.rentone.in/assets/img/offer-fur.png" style={{width:"250px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://sathya.in/Media/Default/Uploaded/df2.jpg" style={{width:"250px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://trak.in/wp-content/uploads/2019/12/Flipkart-end-of-year-sale-top-deals-1024x550.jpg" style={{width:"250px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<div>
  <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginLeft:"10px",marginRight:'10px',alignItems:"center",boxShadow: "10px 10px 5px grey"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Top Offers</h4>
    <img src="https://rukminim1.flixcart.com/flap/278/278/image/4fbaa0357e81ea6e.jpg?q=90" style={{width:"200px"}} />
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/k91o6fk0/computer/k/8/h/asus-original-imafqxfewfakvj64.jpeg?q=70" alt=""/>
      <p>Best Selling Laptops</p>
      <p style={{color:"green",marginTop:"-9px"}}>Up to 50% Off</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Up to 20000 Off</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/kg8avm80/television/p/k/4/realme-rmv2001-sled-tv-55-original-imafwg57tpeybzq8.jpeg?q=70" alt=""/>
      <p>Realme Smart TVs</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $10,999</p>
      <p style={{color:"grey",marginTop:"-10px"}}>First Time Price Drop</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/k6fd47k0pkrrdj/speaker-refurbished/g/b/h/a-aavante-bar-1550-boat-original-imafk9gd9vmcgzxr.jpeg?q=70" alt=""/>
      <p>Soundbars</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $1,999</p>
      <p style={{color:"grey",marginTop:"-10px"}}>boAt, JBL & More</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/flap/200/200/image/00617aba3b2e6acc.jpg?q=70" alt=""/>
      <p>Trimmers</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $299</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Mi,Philips & More</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/jr9iwsw0/bed-mattress/5/y/n/queen-5-60-75-athena-therapedic-coir-flipkart-perfect-homes-original-imafd2fgvyvvubad.jpeg?q=70" alt=""/>
      <p>Mattresses</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $2,999</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Peps,Kurlon & More</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/flap/464/708/image/406ba71a11027708.jpg?q=70" style={{width:"190px"}} alt=""/>
    </div>
  </div>
  
</div>
<div>
<div>
<div style={{backgroundColor:"hotpink",display:"flex",justifyContent:"center"}}>
 <div style={{display:"flex",flexDirection:"column"}}>
   <h4>iphone</h4>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/404px-Apple_logo_black.svg.png" style={{width:"80px",height:"80px",marginTop:"3%"}} />
 </div>
<img src="https://starpng.com/public/uploads/preview/flash-sale-png-image-download-21566900088puulavr4gd.png"  style={{height:"100px",marginTop:"-200px"}} />
  <img src="https://www.freeiconspng.com/uploads/apple-iphone-x-pictures-5.png" style={{height:"300px",marginLeft:"-160px"}} />
  
<div style={{display:"flex",flexDirection:"column"}}>
<h1 style={{color:"white"}}>Apple Iphone</h1>
<h1 style={{color:"yellow"}}>Best Sale Ever!</h1>
</div>
</div>

</div>

</div>
<div>
  <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginLeft:"10px",marginRight:'10px',alignItems:"center",boxShadow: "10px 10px 5px grey"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
    <h4 style={{marginTop:"40px",fontSize:"20px"}}>Todays Fashion Deal</h4>
    <img src="https://rukminim1.flixcart.com/flap/278/278/image/ed683d9d64136203.jpg?q=90"style={{width:"200px"}} />
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/k0zlsi80/shoe/y/s/p/51492-9-skechers-ccgy-original-imafkndwr6fhymnm.jpeg?q=70" alt=""/>
      <p>Skechers,ASICS</p>
      <p style={{color:"green",marginTop:"-9px"}}>Up to 60% Off</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Sports Shoes</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/jplif0w0/shoe/c/q/u/10516-8-provogue-dark-grey-original-imafbsma77xfcun7.jpeg?q=70" alt=""/>
      <p>Provogue,Killer & More</p>
      <p style={{color:"green",marginTop:"-9px"}}>Under $699</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Mens Footware</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/k6l2vm80/shoe/x/n/g/egt20-10-reebok-bunblu-nacho-none-original-imafpyjgzggn3awj.jpeg?q=70" alt=""/>
      <p>Reebok,FILA</p>
      <p style={{color:"green",marginTop:"-9px"}}>Min 60% Off</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Sports Shoes, Sneakers</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/309/371/k69ncsw0/watch/8/z/c/usat0141-u-s-polo-assn-original-imafzr9gfrqzmzyw.jpeg?q=50" style={{width:"120px"}} alt=""/>
      <p>Casino,Titan</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $299</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Casino,Titan & More</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/jz30nm80/kurti/p/m/x/l-bm67-rustorange-original-imafgt9fwewyuufd.jpeg?q=70" alt=""/>
      <p>Libas,Varanga</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $2,999</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Top Brands on Best Deals!</p>
    </div>
  </div>
  
</div>
<div>
  <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginLeft:"10px",marginRight:'10px',alignItems:"center",boxShadow: "10px 10px 5px grey"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
    <h4 style={{marginTop:"40px",fontSize:"20px"}}>Trending Deals</h4>
    <img src="https://rukminim1.flixcart.com/flap/278/278/image/ed683d9d64136203.jpg?q=90"style={{width:"200px"}} />
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/kf8kvbk0/dinner-set/m/x/9/httcecom27dn1fptmo-larah-by-borosil-original-imafvqppph5q5kxr.jpeg?q=70" alt=""/>
      <p>Dinner Sets</p>
      <p style={{color:"green",marginTop:"-9px"}}>Up to 60% Off</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Cello & More</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/j7m7y4w0/safe-locker/z/e/q/halodigital8l-godrej-original-imaexshh8r7mukqa.jpeg?q=70" alt=""/>
      <p>Safe Locker</p>
      <p style={{color:"green",marginTop:"-9px"}}>Minimun 30% Off</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Godrej and more</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/j7f2qvk0/blower/k/h/v/kx-1800-black-decker-original-imaerx4hyqesng9p.jpeg?q=70" alt=""/>
      <p>Heat Guns</p>
      <p style={{color:"green",marginTop:"-9px"}}>Form $699</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Black & Decker</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/k5fn3ww0/pressure-cooker/v/h/p/14459-pigeon-original-imafz49sbjbjjed8.jpeg?q=70" style={{width:"120px"}} alt=""/>
      <p>Cookware Range</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $299</p>
      <p style={{color:"grey",marginTop:"-10px"}}>Prestige & More</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src="https://rukminim1.flixcart.com/image/200/200/k40798w0/mug/w/a/g/letter-a-alphabet-best-gift-for-boy-friend-special-birthday-gift-original-imafnymknjujqbkx.jpeg?q=70" alt=""/>
      <p>Mugs</p>
      <p style={{color:"green",marginTop:"-9px"}}>From $199</p>
      <p style={{color:"grey",marginTop:"-10px"}}>AMT & More</p>
    </div>
  </div>
  <br/>
  <br/>
</div>
<div style={{borderTop:"2px solid black"}}>
  <p style={{color:"grey"}}>Top Stories:Brand Directory</p>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>MOST SEARCHED FOR ON FLIPKART:</p>
    <p style={{color:"grey",fontSize:"12px"}}>TV and Home Appliances Big Billion Days 2020Flipkart COVID-19 InsuranceBig Billion Days Sale Store 2020Flipkart Help CentreTrack OrdersManage OrdersReturn OrdersGalanz AppliancesMade In India ToysInfrared ThermometerFlipkart Gift Cards StoreMAX Fashion StoreSuper Fan ShowFake or Not ShowSnapchat SpectaclesSareesFlipkart Axis Bank Credit CardHand SanitizerRealme BandHuawei gt 2e Smart Watch5G MobilesFlipkart VideosFlipkart Pay LaterFlight BookingMi Air Purifier 2CiQOOO 3Studio FurnitureVaporizerNebulizersHand WashPollution MasksA.P.J Abdul Kalam BooksChetan Bhagat BooksAmrita Pritam BooksHuawei Band 4Realme 5iRealme Buds AirNokia 55 Inch TVRealme X2 PRONoise Colorfit Pro 2 SmartwatchUnicorn ToysRedmi 8Honor 20iOPPO K1Realme 5Realme 5 ProFlipkart Axis Bank Credit CardRedmi K20Redmi K20 ProRealme 3iRealme XPhantom 9Redmi 7ARedmi Note 7SEarringsMens Watches3m MasksJewelleryWatchesGold CoinMangalsutran95 masksSunglassesMi SunglassesBackpacks</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>MOBILES:</p>
    <p style={{color:"grey",fontSize:"12px"}}>Vivo Y91iVivo Y11Vivo Y15Vivo Y50Vivo Y12Reno2 FOppo A12Oppo F15Oppo A31Samsung A71Samsung A51Samsung A31Realme X2Realme 5Infinix Hot 8iPhone 11iPhone 11 ProiPhone 11 Pro MaxMobile Offersiphone xiphone 8iphone 7iphone 6Redmi 5A4G MobileNokia MobileSamsung MobileiphoneOppo MobileVivo Mobile</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>CAMERA:</p>
    <p style={{color:"grey",fontSize:"12px"}}>GoPro Action CameraNikon CameraCanon CameraSony CameraCanon DSLRNikon DSLR
LAPTOPS:Microsoft Surface Go Pentium Gold 64GBMicrosoft Surface Go Pentium 128GBBranded LaptopsApple LaptopsAcer LaptopsLenovo LaptopsDell LaptopsAsus LaptopsHP LaptopsGaming Laptops2 in 1 LaptopsBusiness Laptops
TVS:OnePlus TVsRealme SLED 4K Smart TVsMI 43 Inch 4K TVMI 40 Inch TVMi 65 Inch TVSamsung 32 Smart TVLG TVTVSony TVSamsung TVMi 49 Inch Smart TVAndroid TelevisionIffalcon TvMi TV</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>LARGE APPLIANCES:</p>
    <p style={{color:"grey",fontSize:"12px"}}>Voltas ACHitachi ACLloyd ACBlue Star ACDaikin ACLG ACSamsung RefrigeratorsHaier RefrigeratorWhirlpool Refrigerator</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>CLOTHING:</p>
    <p style={{color:"grey",fontSize:"12px"}}>Men ShirtsMen T-ShirtsJeansRaincoatMen SuitsMen TrousersMens BlazersSareeDressesSkirtsDesigner Salwar SuitsBraDesigner KurtisMen KurtaGym WearParty DressesPalazzo SuitsGlovesNightyMaxi DressesAnarkaliIndo Western DressGownsCulottesSherwaniGirls ClothesSalwar SuitsTopsLehengaDress MaterialsKurtisDesigner SareesSummer DressesLeggingsDesigner BlousesKids ClothingBlouse DesignsBanarasi SareesSilk SareesCotton SareesShortsBlouseLong SkirtsPalazzoJoggersMini DressesNight SuitsBanarsi SuitInnerwearSports WearCapChanderi SareesLinen SareesPaithani SareesPantiesSharara SuitsSalwarRuffle SareesBikiniPajamasDhoti KurtaManyavar KurtasJacketsWestern WearSleepwearClothingKids ClothingWinter WearGeorgette SareesEthnic WearBriefs & TrunksSweatshirtsHome Wear DressSweaters</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>FOOTWEAR:</p>
    <p style={{color:"grey",fontSize:"12px"}}>ShoesAdidas ShoesReebok ShoesNike ShoesPuma ShoesBootsBata ShoesWoodland ShoesSkechers ShoesSneakersWomens BootsSports ShoesLoafersSandalsLotto Sports ShoesCasual ShoesWomens Skechers ShoesAsics Sports ShoesFormal ShoesSchool Shoes</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>FURNITURE:</p>
    <p style={{color:"grey",fontSize:"12px"}}>FurnitureSofasBedsDining setsWardrobesMattressesTV UnitsTablesChairsShelvesBean BagsRed SofaWhite SofaGreen SofaBlack SofaBrown Sofa</p>
  </div>
  <br/> <br/>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>Flipkart: The One-stop Shopping Destination</p>
    <p style={{color:"grey",fontSize:"8px"}}>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.</p>
  </div>
  <div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>Flipkart Plus</p>
    <p style={{color:"grey",fontSize:"8px"}}>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!

What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
An annual Zomato Gold membership
An annual Hotstar Premium membership
6 months Gaana plus subscription
Rupees 550 instant discount on flights on ixigo
</p>
  </div><div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>No Cost EMI</p>
    <p style={{color:"grey",fontSize:"8px"}}>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
  </div><div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>EMI on Debit Cards</p>
    <p style={{color:"grey",fontSize:"8px"}}>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.
</p>
  </div><div>
    <p style={{color:"grey",borderBottom:"1px solig grey"}}>Home and Furniture</p>
    <p style={{color:"grey",fontSize:"8px"}}>Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.

You may have your furniture all set up, but they could end up looking flat and incomplete without complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns a house to an inviting home under one roof at Flipkart.</p>
  </div>
</div>
<div>
  <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"black"}}>
   <div style={{color:"white"}}>
   <p style={{color:"grey"}}>ABOUT</p>
   <p style={{fontSize:"12px"}}>Contact Us</p>
   <p style={{fontSize:"12px"}}>About Us</p>
   <p  style={{fontSize:"12px"}}>Careers</p>
   <p style={{fontSize:"12px"}}>flipkart</p>
   <p style={{fontSize:"12px"}}>Press</p>
   <p style={{fontSize:"12px"}}>Flipcart</p>
   <p style={{fontSize:"12px"}}>Wholesale</p>
   </div>
   <div style={{color:"white"}}>
   <p style={{color:"grey"}}>HELP</p>
   <p style={{fontSize:"12px"}}>Contact Us</p>
   <p style={{fontSize:"12px"}}>About Us</p>
   <p style={{fontSize:"12px"}}>Careers</p>
   <p style={{fontSize:"12px"}}>flipkart</p>
   <p style={{fontSize:"12px"}}>Press</p>
   <p style={{fontSize:"12px"}}>Flipcart</p>
   <p style={{fontSize:"12px"}}>Wholesale</p>
   </div>
   <div style={{color:"white"}}>
   <p style={{color:"grey"}}>POLICY</p>
   <p style={{fontSize:"12px"}}>Contact Us</p>
   <p style={{fontSize:"12px"}}>About Us</p>
   <p style={{fontSize:"12px"}}>Careers</p>
   <p style={{fontSize:"12px"}}>flipkart</p>
   <p style={{fontSize:"12px"}}>Press</p>
   <p style={{fontSize:"12px"}}>Flipcart</p>
   <p style={{fontSize:"12px"}}>Wholesale</p>
   </div>
   <div style={{color:"white"}}>
   <p style={{color:"grey"}}>SOCIAL</p>
   <p style={{fontSize:"12px"}}>Contact Us</p>
   <p style={{fontSize:"12px"}}>About Us</p>
   <p style={{fontSize:"12px"}}>Careers</p>
   <p style={{fontSize:"12px"}}>flipkart</p>
   <p style={{fontSize:"12px"}}>Press</p>
   <p style={{fontSize:"12px"}}>Flipcart</p>
   <p style={{fontSize:"12px"}}>Wholesale</p>
   </div>
  <div style={{color:"white"}}>
   <p style={{color:"grey"}}>Mail Us:</p>
   <p style={{fontSize:"12px",width:"160px"}}>Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India</p>
   
   </div>
   <div style={{color:"white"}}>
   <p style={{color:"grey"}}>Registered Office Address:</p>
   <p style={{fontSize:"12px",width:"160px"}}>Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 1800 208 9898</p>
   
   </div>
   <div style={{display:"flex",flexDirection:"column"}}>
   <img src="https://lh3.googleusercontent.com/proxy/5FyjCiFc69S4QM8W2tBPDYMFWP8IfE39sAgCYjczIeOiW3BeiUZBMOJiqACnGKdN_c9gXFab_rQPWuhFSjGhr4xHsYG96Qfbs_3IgTg-hrrbKrbNfMYM7DfVy1i224KUYSkSpQ" style={{width:"300px"}} />
   <div style={{marginTop:"20px"}}>
    <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_b3ab24.svg" />
  </div>
   </div>
  </div>
  
  
</div>
    </div>

  )
}


export default Home