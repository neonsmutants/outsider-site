<template>
<div>
    <img src="@/assets/img/ui/scroll.svg" alt="Scroll down" id="scrolldown" v-bind:class="{ hidden: !showScroll }">

    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>

    <!-- embed youtube -->    
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/G8h12wI1tDc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="space"></div>
    
    <div class="cloud left" id="c0">
      <div class="content">
        <p class="big">A <strong>musical album</strong> and <strong>trans-media project</strong></p>
        <p class="subtitle">by Philippe Cohen Solal & Mike Lindsay</p>
      </div>    
      <img src="@/assets/img/ui/clouds/c0.svg" class="cb">
    </div>

    <div class="space"></div>

    <div class="cloud right" id="c1">
      <div class="content">
        <p class="quote">« This is my story, this <br> is my song »</p>
        <p class="signature">- Henry Darger</p>
      </div>
      <img src="@/assets/img/ui/clouds/c1.svg" class="cb">
    </div>

    <div class="space"></div>

    <div class="cloud left" id="c2">
      <div class="content">
        <p class="quote">« Both majestic and baroque »</p>
        <p class="signature">- FIP</p>
      </div>
      <img src="@/assets/img/ui/clouds/c2.svg" class="cb">
    </div>

    <div class="space"></div>

    <!-- album -->
    <div class="cloud" id="album">
      <div class="content center-text">     
        <a href="http://smarturl.it/outsiderdarger" target="blank" class="bt-primary">Listen to the album</a>
      </div>
      <img src="@/assets/img/ui/album.png" alt="Album" class="cb ci">
    </div>

    <div class="space"></div>

    <div class="cloud right" id="c3">
      <div class="content">
        <p><strong>OUTSIDER</strong> transports us into Henry Darger's imaginary and "unreal realm" by <strong>mixing music and dreamlike imagery</strong>. Based on animations, this video creation invites the spectator to immerse himself in <strong>the hallucinatory world of this phenomenal artist</strong>.</p>
      </div>
      <img src="@/assets/img/ui/clouds/c3.svg" class="cb">
    </div>

    <div class="space"></div>

    <!-- videos -->
    <div class="cloud interstitial" id="videos">
      <div class="content center-text">
        <a href="https://www.youtube.com/watch?v=p3FKn5eVCwg&list=PL6c_5GyF9mZQXOmzXyQ5WsqcjZ3GnWYaL" target="blank" class="bt-primary">Watch videos</a>
      </div>
      <img src="@/assets/img/ui/clouds/c-videos.png" alt="Videos" class="cb ci" id="c-clips">
    </div>

    <div class="space"></div>

    <div class="cloud left">
      <div class="content">
        <p class="quote">« Music, visual arts and storytelling »</p>
        <br>
        <p>« I dream that this transmedia project <strong>brings together past, present and future</strong>. . I would like that through this audiovisual and interactive creation inspired by the work and life of the most famous outsider artist, the public questions <strong>the role and relationship of celebrity to the necessity of art</strong>. » <br><br> - Philippe Cohen Solal</p>
      </div>
      <img src="@/assets/img/ui/clouds/c4.svg" class="cb" id="c4">
    </div>

    <div class="space"></div>

    <!-- podcasts -->
    <div class="cloud interstitial" id="podcasts">
      <div class="content center-text">
        <iframe width="70%" height="80" src="https://embed.acast.com/outsider-histoire-henry-darger" scrolling="no" frameborder="0" style="border:none;overflow:hidden;"></iframe>
        <a href="#" target="blank" class="bt-primary">More podcasts</a>
      </div>
      <img src="@/assets/img/ui/clouds/c-podcasts.png" alt="Podcasts" class="cb ci" id="c-podcasts">
    </div>

    <div class="space"></div>

    <div class="cloud right">
      <div class="content">
        <p class="quote">« These are not your average love songs. »</p>
        <br>
        <p>
          In North Side Chicago, in the middle of the 20th century, 
          there was a reclusive hospital janitor who lived in one room – 
          and <strong>who turned out to be an artistic genius</strong>. 
          <strong>Henry Darger invented a whole world inside that room, making 
          hundreds of paintings and collages, and writing fantasy novels 
          that were 15,000 pages long</strong>. His work told the story of an ongoing 
          battle between good and evil, where rampaging armies battled a band 
          of brave children called The Vivian Girls.
        </p>
        <p>
          Nearly a half century after Darger’s death, <strong>Gotan Project’s Philippe 
          Cohen Solal and Tunng’s Mike Lindsay present OUTSIDER</strong>, a tapestry of 
          ten warm and resonant, rapturous pop songs and gorgeous visuals that 
          transmit and translate Darger’s story into the current day.
          <strong>These are heart-soaked instant classics, brought to life in remarkable
          style by singers Adam Glover and Hannah Peel</strong>. These are not your average 
          love songs.
        </p>       
      </div>
      <img src="@/assets/img/ui/clouds/c5.svg" class="cb" id="c5">
    </div>

    <div class="space"></div>

    <!-- tour -->
    <div class="cloud interstitial" id="tour">
      <div class="content center-text">
        <a href="https://www.songkick.com/artists/3653951-philippe-cohen-solal" target="blank" class="bt-primary">Upcoming gigs</a>
      </div>
      <img src="@/assets/img/ui/clouds/c-tour.png" alt="Tour" class="cb ci" id="c-tour">
    </div>
    
    <div class="space"></div>

    <div class="cloud left">
      <div class="content">
        <p class="quote">« It sounds like a very twisted long-forgotten musical, with an evil twist and a very innocent blanket wrapped around it. It’s classic, it’s beautiful and it’s experimental. »</p>
        <p class="signature">- Mike Lindsay</p>
      </div>
      <img src="@/assets/img/ui/clouds/c6.svg" class="cb" id="c6">
    </div>

    <div class="space"></div>

    <!-- press -->
    <div class="cloud interstitial" id="press">
      <div class="content center-text">
        <a href="https://linktr.ee/outsiderpress" target="blank" class="bt-primary">They talk about us</a>
      </div>
      <img src="@/assets/img/ui/press.png" alt="Press" class="cb ci" id="c-press">
    </div>

    <div class="space"></div>

    <h2 class="bigtitle">HENRY DARGER</h2>

    <div class="space"></div>

    <div class="cloud right">
      <div class="content">
        <p class="quote">« I hated to see the day come when I will be grown up. I never wanted to. I wished to be young always »</p>
        <p class="signature">- Henry Darger</p>
      </div>
      <img src="@/assets/img/ui/clouds/c7.svg" class="cb" id="c7">
    </div>

    <div class="space"></div>

    <img src="@/assets/img/ui/darger.png" alt="Darger" id="c-darger">

    <div class="cloud left">
      <div class="content">
        <p>
          <strong>HENRY DARGER (1892-1973) was a reclusive hospital janitor and dishwasher who led a secret life as a prolific visual artist and epic novelist</strong>. His vast collection of creative work was discovered in 1972 when his two-room apartment in Chicago was cleared out shortly before he died. Over some 350 watercolor, pencil, collage and carbon-traced drawings, most of them stitched into three enormous "albums," as well as seven typewritten hand-bound books, thousands of bundled sheets of typewritten text, and numerous journals, ledgers and scrapbooks were discovered.
        </p>
        <p>
          Darger's unpublished 15,000-page typewritten fantasy novel, <strong>The Story of the Vivian Girls, in What Is Known as the Realms of the Unreal, of the Glandeco-Angelinian War Storm, Caused by the Child Slave Rebellion</strong> — or, for short, In the Realms of the Unreal — and its 8,500-page handwritten sequel of sorts, Further Adventures of the Vivian Girls in Chicago, were the sagas upon which he based several hundred panoramic "illustrations," many of them double-sided and more than 9 feet in length.
        </p>
        <br>
        <p><a href="http://www.officialhenrydarger.com/" target="blank" class="bt-primary">Read full bio</a></p>
      </div>
      <img src="@/assets/img/ui/clouds/c8.svg" class="cb" id="c8">
    </div>

    <div class="space"></div>

    <!-- collections -->
    <div class="cloud interstitial" id="collections">
      <div class="content center-text">
        <a target="blank" class="bt-primary disabled">Collections around the globe</a>
        <div class="alert">Coming soon !</div>
      </div>
      <img src="@/assets/img/ui/globe.png" alt="Collections around the globe" class="cb ci" id="c-collections">
    </div>

    <div class="space"></div>

    <h2 class="bigtitle">THE BAND</h2>

    <div class="space"></div>

    <div class="cloud right">
      <div class="content">
        <img src="@/assets/img/ui/avatar0.png" alt="Philippe" class="avatar">
        <div class="name">PHILIPPE COHEN SOLAL</div>
        <div class="role">Keyboards & electronics</div>
        <p><strong>The million-selling artist, producer, composer and co-founder of Gotan Project, Philippe Cohen Solal</strong> has also collaborated with numerous artists like Salif Keita, Angelique Kidjo, Horace Andy, Adrien Brody, Roberto Fonseca, Dorfmeister, Chassol, Bobby Mc Ferrin...</p>
        <br>
        <a href="https://yabasta-records.com/en/philippe-cohen-solal" target="blank" class="persolink">> More infos</a>
      </div>
      <img src="@/assets/img/ui/clouds/c9.svg" class="cb" id="c9">
    </div>

    <div class="space"></div>

    <div class="cloud left">
      <div class="content">
        <img src="@/assets/img/ui/avatar1.png" alt="Mike" class="avatar">
        <div class="name">MIKE LINDSAY</div>
        <div class="role">Guitar, bass & electronics</div>
        <p><strong>Mercury Music Prize winning producer, Mike Lindsay</strong> is most known for being the co-founder, composer and producer of UK acid folk band <strong>Tunng</strong>. He has co-written and produced many albums for a wide range of artists including Speech Debelle's Mercury Music prize winning album "Speech Therapy", Jon Hopkins, Farao, DuBlonde, Low Roar, Beth Jeans Houghton, Serafina Steer, Cibelle and Laura J Martin...</p>
        <br>
        <a href="http://www.mike-lindsay.com" target="blank" class="persolink">> More infos</a>
      </div>
      <img src="@/assets/img/ui/clouds/c10.svg" class="cb" id="c10">
    </div>

    <div class="space"></div>

    <div class="cloud right">
      <div class="content">
        <img src="@/assets/img/ui/avatar2.png" alt="Adam" class="avatar">
        <div class="name">ADAM GLOVER</div>
        <div class="role">Lead singer</div>
        <p><strong>Adam Glover is a recording artist originally from Manchester</strong>, UK, where his love for crooning first began. After graduating from the university of Westminster as a Bachelor of Musicology, Adam resided in Los Angeles working with some of the music industry's top producers.</p>
        <br>
        <!-- <a href="#" target="blank" class="persolink">> More infos</a> -->
      </div>
      <img src="@/assets/img/ui/clouds/c11.svg" class="cb" id="c11">
    </div>

    <div class="space"></div>

    <div class="cloud left">
      <div class="content">
        <img src="@/assets/img/ui/avatar3.png" alt="Hannah" class="avatar">
        <div class="name">HANNAH PEEL</div>
        <div class="role">Keyboards, violin, trombone, vocals</div>
        <p><strong>Emmy-nominated and RTS winning composer</strong>, with a flow of solo albums and collaborative releases, <strong>Hannah joins the dots between science, nature and the creative arts</strong>, through her explorative approach to electronic, classical and traditional music.</p>
        <br>
        <a href="http://www.hannahpeel.com" target="blank" class="persolink">> More infos</a>
      </div>
      <img src="@/assets/img/ui/clouds/c12.svg" class="cb" id="c12">
    </div>

    <div class="space"></div>

    <!-- making-of -->
    <div class="cloud interstitial" id="making-of">
      <div class="content center-text">
        <a target="blank" class="bt-primary disabled">Making-of</a>
        <div class="alert">Coming soon !</div>
      </div>
      <img src="@/assets/img/ui/makingof.png" alt="Making Of" class="cb ci" id="c-makingof">
    </div>

    <div class="space"></div>

    <!-- shop -->
    <div class="cloud interstitial" id="shop">
      <div class="content center-text">
        <a href="https://yabasta-records.com/categorie-produit/outsider" target="blank" class="bt-primary">Visit our shop</a>
      </div>
      <img src="@/assets/img/ui/clouds/c-shop.png" alt="Shop" class="cb ci" id="c-shop">
    </div>
    
    <div class="space"></div>
    <div class="space"></div>

    <footer id="footer">
      <div class="content">
        <div class="row">
          <div class="column2">
            <form v-if="showNewsletter">
              <label for="newsletter" class="title">Subscribe to our newsletter !</label>
              <input type="email" name="newsletter" id="input-newsletter" placeholder="Email">
              <button type="submit">Send</button>
            </form>
          </div>
          <div class="column2 nomargin" id="contact">
            <div class="title">Contact us</div>
            <p>Send an email to <a href="mailto:contact@outsideronline.co">contact@outsideronline.co</a></p>
          </div>
        </div>
        <div class="clearfix"></div>
        <hr>
        <div class="row">
          <div class="column2">
            <a href="https://yabasta-records.com" target="blank" class="logo"><img src="@/assets/img/ui/logo-yabasta.svg"></a>
            <a href="https://fb.com/philippecohensolalofficial" target="blank" class="logo"><img src="@/assets/img/ui/logo-fb.svg"></a>
            <a href="https://www.instagram.com/philippecohensolal/" target="blank" class="logo"><img src="@/assets/img/ui/logo-insta.svg"></a>
          </div>
          <div class="column2 nomargin">        
            <a href="https://open.spotify.com/album/02tG8xdQhgLxZHxb50SEC4?si=ZWPbWQVRTQ-yWYAw_kGLZg" target="blank" class="logo"><img src="@/assets/img/ui/logo-spotify.svg"></a>
            <a href="https://music.apple.com/fr/album/outsider-feat-adam-glover/1535924537?uo=4&ls=1&app=music&at=11lEW&ct=v0zuwf" target="blank" class="logo"><img src="@/assets/img/ui/logo-apple.svg"></a>
            <a href="https://www.amazon.com/dp/B08L81Z756?tag=smarturl-pivot-20" target="blank" class="logo"><img src="@/assets/img/ui/logo-amazon.svg"></a>
          </div>         
        </div>
        <div class="clearfix"></div>
        <div class="row">
          <div class="column2 nomargin">
            <p class="minitext">
              <strong>OUTSIDER</strong>, a musical album & transmedia project inspired by Henry Darger. 
              <br>Website by <a href="https://neonsmutants.github.io/" target="blank">Néons Mutants</a>. All rights reserved © 2020.
            </p>
          </div>
        </div>
      </div>
      <img src="@/assets/img/ui/clouds/footer.svg" id="c-footer">
    </footer>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showNewsletter: false,
      showScroll: true
    }
  },
  created() {
    let that = this
      window.addEventListener('scroll', hideScrollHandler)
      function hideScrollHandler() {
        that.showScroll = false
        console.log(that.showScroll)
        window.removeEventListener('scroll', hideScrollHandler)
      }
  }
}
</script>