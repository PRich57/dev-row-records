
//adding to favorites from star button
const addToFavorite = async (buttonId, dataType) => {
  try {
    let postData = {
      album_id: null,
      artist_id: null,
      merch_id: null
    }
    switch(dataType) {
      case "album_id":
        postData.album_id = buttonId;
        break;
      case "artist_id":
        postData.artist_id = buttonId;
        break;
      case "merch_id":
        postData.merch_id = buttonId;
        break;
    }
    const response = await fetch('/api/favorite/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
    if (response.ok){
      console.log(`This button works: card id - ${buttonId}`)
      console.log(`the type is ${dataType}`)
      return true
    } else {
      return false
    }

  } catch (err) {
    console.error(err);
  }
}

//function delete from favorites from star button
const deleteFromFavorite = async (buttonId, dataType) => {
  try {
    console.log(buttonId);
    console.log(dataType)
    const response = await fetch(`/api/favorite/${buttonId}?type=${dataType}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      if (window.location.href === "https://dev-row-records-63d750921ea0.herokuapp.com/favorites" || window.location.href === "http://localhost:3001/favorites") {
        window.location.reload();
      }
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
  
}

//favorite add event listener
$(".card-favorite-button").click(async function (event) {
  event.stopPropagation();
  event.preventDefault();
  let buttonId = $(this).attr("id");
  console.log(buttonId)
  let dataType = $(this).attr("data-type");
  if ($(this).attr("fill") !== "yellow"){
    const addFavSuccess = await addToFavorite(buttonId, dataType)
    console.log(`line 225 addFavSuccess in nav.js: ${addFavSuccess}`)
    if(addFavSuccess){
      $(this).attr("fill", "yellow");
    } else {
      console.error("add favorite failed")
    }
  } else {
    const deleteFavSuccess = await deleteFromFavorite(buttonId, dataType);
    if(deleteFavSuccess){
      $(this).attr("fill", "white");
    } else {
      console.error("delete favorite failed")
    }
  }
})

