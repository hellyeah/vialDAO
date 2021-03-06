/* Moralis init code */
const serverUrl = "https://5qjmf7g9rdvz.usemoralis.com:2053/server";
const appId = "8mMMVDYRYldOWZ1Btq6QKp71I3QQS71LMTSJOO4X";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    console.log('starting login')
    let user = Moralis.User.current();

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
    async function fetchNFTs() {
        let user = Moralis.User.current();
        // get NFTs for current user on Mainnet
        const userEthNFTs = await Moralis.Web3.getNFTs();
        console.log("this many NFTs:" + userEthNFTs.length)
        for (var i=0; i<userEthNFTs.length; i++) {
            console.log(userEthNFTs[i].token_uri)
            try {
                var blah = await fetch(userEthNFTs[i].token_uri)
                console.log(blah)
            } catch(err) {
                console.log(err)
            }
        }
        // console.log(userEthNFTs)
        // console.log(userEthNFTs[0].token_uri)
        // var blah = await fetch(userEthNFTs[4].token_uri)
        // console.log(blah)
        // const data = await blah.json()
        // console.log(data.image)
        // const myDiv = document.getElementById("blahblah")
        // myDiv.style.backgroundImage=`url(${data.image})`;
    }

  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;
  document.getElementById("btn-NFT").onclick = fetchNFTs;

