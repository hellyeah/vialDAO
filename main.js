/* Moralis init code */
const serverUrl = "https://5qjmf7g9rdvz.usemoralis.com:2053/server";
const appId = "8mMMVDYRYldOWZ1Btq6QKp71I3QQS71LMTSJOO4X";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    let user = Moralis.User.current();
              // get NFTs for current user on Mainnet

              const userEthNFTs = await Moralis.Web3.getNFTs();
              console.log(userEthNFTs)
              console.log(userEthNFTs[0].token_uri)
              var blah = await fetch(userEthNFTs[4].token_uri)
              console.log(blah)
                const data = await blah.json()
                console.log(data.image)
                const myDiv = document.getElementById("blahblah")
                myDiv.style.backgroundImage=`url(${data.image})`;
              // get testnet NFTs for user
  
            //   const testnetNFTs = await Moralis.Web3.getNFTs({ chain: ‘ropsten’ });
  
            //   // get polygon NFTs for address
  
            //   const options = { chain: ‘matic’, address: ‘0x…’ };
  
            //   const polygonNFTs = await Moralis.Web3.getNFTs(options);
  
            //   console.log(polygonNFTs)
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;

