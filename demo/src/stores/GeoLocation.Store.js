import { readable } from "svelte/store";


export default readable({
    lat: undefined,
    lng: undefined,
    working: false,
    errorMessage: undefined
}, (set) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
    // execute

    // ISSUE :

    // Geolocation permission has been blocked as the user has ignored the permission prompt several times. This can be reset in Page Info which can be accessed by clicking the lock icon next to the URL. See https://www.chromestatus.com/feature/6443143280984064 for more information.
    // GeoLocation.svelte:6 

    // solution :
    // in chrome browser click (!)  before search bar (http ...), location set to allow


    let id;
    // let target;
    let options;

    function success(pos) {
        const crd = pos.coords;

        set({
            lat: crd.latitude,
            lng: crd.longitude,
            working: true,
            errorMessage: undefined
        })

        // if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        //     console.log("Congratulations, you reached the target");
        //     navigator.geolocation.clearWatch(id);
        // }
    }

    function error(err) {
        set({
            lat: undefined,
            lng: undefined,
            working: false,
            errorMessage: err.message
        })
        // console.error(`ERROR(${err.code}): ${err.message}`);
    }

    // target = {
    //     latitude: 0,
    //     longitude: 0,
    // };

    options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
    };

    id = navigator.geolocation.watchPosition(success, error, options);

})