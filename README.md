# This is a test task made for LyraSolar

To setup run `npm i` && `npm run dev` -> afterwards should be available under [http://localhost:3000](http://localhost:3000)

To run tests `npm run test`

## Chosen technologies:
- Main Stack: TypeScript, Next / React, MobX, ThreeJS & React-Three-Fiber, Jest
- Dev Stack: SASS, Jest, React-Test-Renderer 
- UI: React-Icons

## The architectural concept is quite straightforward:
1) As simple as possible -> that keeps code small, interactions clear & data flow obvious
2) React is used to handle UI / UX interactions, speaks to MobX
3) MobX is used to tie application together, store our objects and handle interactions with TreeJS
4) Jest is used to test different components & modules

# Likes of the solution:
I've learned a lot throughout the coding challenge and I think I did a good job.
It has neat, nice & simple architecture and I really enjoyed working with basic THREE.js ->
it's head & shoulders above competitors like Konva or Fabric.

# Dislikes of the solution:
I haven't figured out the Closest Point Tool for any shape & model. I know it is possible but I'm missing some basics to make it work.
I could have gone for more geometrical solution, but it only works for lines -> and Raycaster should work with any given geometry.
Also, it could have got a lot more features if I figured out Closest Point first (like, for example, editing shapes or box-select. Or non-glitchy hover which also should have been done with Raycaster)
Interactions between React-Three-Fiber is a bit quirky and documentation is lackluster, sometimes I felt like it would be better with plain THREE.js but oh well it works fine.
Also TypeScript could have been a lot more descriptive -> it would really add to the MobX interactions, but it's not necessary on prototype stage since automatic type detection is usually enough on this stage.

# New approaches & technologies
- I never worked with ThreeJS, but I've worked with Konva and understand the mechanisms at play
- I haven't tested Canvas interactions before, but I did best as I could to test the data flow
- I haven't worked with MobX, through I've worked with Vuex / Pinia so understand the concept
- I haven't worked with Raycaster and the whole thing is quite new to me and I don't understand it yet.