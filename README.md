<div>

<div align="center">
  <img height="100" src="src/assets/icon.png"  />
  
<h1 align="center"> <strong> DVA </strong> </h1>
<h3 align="center"> Vehicular Accident Detection using AI</p>

<a href="https://github.com/m-visaya/DVA/releases"><strong> Download Latest </strong></a>

</div>

<br>
<br>
  
<p> DVA (Detection of Vehicular Accidents) is an offline desktop application that integrates a deep learning binary classifier. The classifier is capable of detecting vehicular accidents from CCTV streams or video files. Detected accidents are logged using SQLite and the captured accident frames are saved in the user's  <code>Documents</code> folder. </p>

<br>

  <img width="90%" src="src/assets/Dashboard.png"  />

<br>
<br>
<br>

<h2 align="left">Development Tools</h2>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" height="40" width="52" alt="electron logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" height="40" width="52" alt="tensorflow logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height="40" width="52" alt="tailwindcss logo"  />
</div>

<br>
<br>

   <h2>Requirements</h2>

- Node <code> v16.15.1 </code>
- WiX Toolset <code> v3.11 </code> (for building the app locally)

<br>
<br>

   <h2>Local Development</h2>

   <h3>Clone the repository</h3>

    git clone https://github.com/m-visaya/DVA.git

   <h3>Install dependencies</h3>
  
    cd DVA
    npm install --legacy-peer-deps
    
    cd src/render
    npm install --legacy-peer-deps

<br>

   <h3>Run the Vite server</h3>
   On the <code>DVA/src/render</code>  directory run:
   <br>
  
    npm run dev
<br>

   <h3>Run the Electron App</h3>
   On the root folder <code>DVA</code>:
   <br>

    npm run start

<br>

   <h2>Build the Application</h2>

On the <code>DVA/src/render</code> directory run:
<br>

    npm run build

On the root folder <code>DVA</code>:
<br>

    npm run make

</div>

<br>
<br>

<div>
    <h2>Developers</h2>

- <a href="https://github.com/rcbern">@rcbern</a>
- <a href="https://github.com/BKManabat">@BKManabat</a>
- <a href="https://github.com/m-visaya">@m-visaya</a>

</div>

<br>

#

<a href="https://github.com/m-visaya/DVA/issues/new">Report Bug</a>
●
<a href="https://github.com/m-visaya/DVA/issues/new">Request a Feature</a>
