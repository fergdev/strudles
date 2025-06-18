
$: s("bd:5 bd:4")
  .fast(1.5)
  
$: stack(
    chord("<E Bm7 D A>")
  .s("gm_voice_oohs")
  .room(.4)
  // .fast(4)
  .hush()
  // .lpf("200 1000 200 1000")
  ,

  chord("<E  Bm7  D  A >")
    // chord("<E _ E E Bm7 _ Bm7 Bm7 D _ D D A _ A A>")
  // .voicing()
  // .s("gm_guitar_synth_strings2")
  // .room(.4)
  .fast(1)
  // .hush()
  
  ,
  


   note("~ G# B G# A F# A _ D A D _ C# A C# _")
       .s("gm_viola")
  .attack(.1)
.decay(.4)
.sustain(.25)
.release(.2)
       // .superimpose(x=>x.add(.54))
        // .echo(2, 2 , 2)
   // .echo(6)
        .fast(.25)
 
  ,

  note("E _ E E B _ B B D _ D D A _ A A")
  .s("gm_fretless_bass")
  .fast(.25)
   // .hush()
).fast(1.5)


 $:   
  note("B B B B B B A B B A F# B ~ B B D ~ G# G# A ~ G# G# D G# G# A ~ A A A") 
    // note("B B B B B B A B B A F# B ~ B B D ~ G# G# A ~ G# G# D G# G# A ~ A A A D B D B D B B D D D D D C# C# C# B C# ~ B ~ B ~ A B ~ A A B B F# E E E E")
      .s("gm_voice_oohs")
    // .superimpose(x=>x.add(.54))
    // .echo(2, 3 , 4, 6)
    .fast(.0625)
.hush()
   // .color("cyan")
