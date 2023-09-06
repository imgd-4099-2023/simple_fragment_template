import { default as seagulls } from './seagulls.js'
import { default as Video    } from './video.js'
import { default as Audio    } from './audio.js'

const shader = `
//@group(0) @binding(0) var<uniform> frame: f32;
//@group(0) @binding(1) var<uniform> res:   vec2f;

@vertex 
fn vs( @location(0) input : vec2f ) ->  @builtin(position) vec4f {
  return vec4f( input, 0., 1.); 
}

@fragment 
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {;
  //let blue = .5 + sin( frame / 60. ) * .5;
  return vec4f( 1.,0.,0. , 1. );
}`

async function main() {
  let frame = 0

  const sg = await seagulls.init()

  sg//.uniforms({ frame, res:[window.innerWidth, window.innerHeight] })
    //.onframe( ()=> sg.uniforms.frame = frame++ )
    .render( shader )
    .run()
}

main()
