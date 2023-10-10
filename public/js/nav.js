//ADD TO FAVORITES: star button
const addToFavorite = async (buttonId, dataType) => {
  try {
    let postData = {
      album_id: null,
      artist_id: null,
      merch_id: null,
    };
    // pending what type of card it is
    switch (dataType) {
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
    // post request to server
    const response = await fetch("/api/favorite/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (response.ok) {
      return true;
    } else {
      // modal fires
      Swal.fire({
        title: "Oops!",
        text: "In order to add to favorites, you must be logged in.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

//DELETE FROM FAVORITES FUNCTION: star button
const deleteFromFavorite = async (buttonId, dataType) => {
  try {
    const response = await fetch(`/api/favorite/${buttonId}?type=${dataType}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      if (
        // only reload screen if we're in favorites page
        window.location.href ===
          "https://dev-row-records-63d750921ea0.herokuapp.com/favorites" ||
        window.location.href === "http://localhost:3001/favorites"
      ) {
        window.location.reload();
      }
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};

//favorite add event listener
$(".card-favorite-button").click(async function (event) {
  event.stopPropagation();
  event.preventDefault();
  // in handlebars we store the type of card as the i.d.
  let buttonId = $(this).attr("id");
  let dataType = $(this).attr("data-type");
  // changes color of star on card
  if ($(this).attr("fill") !== "yellow") {
    const addFavSuccess = await addToFavorite(buttonId, dataType);
    if (addFavSuccess) {
      $(this).attr("fill", "yellow");
    } else {
      console.warn("add favorite failed");
    }
  } else {
    const deleteFavSuccess = await deleteFromFavorite(buttonId, dataType);
    if (deleteFavSuccess) {
      $(this).attr("fill", "white");
    } else {
      console.warn("delete favorite failed");
    }
  }
});
