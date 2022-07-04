<script>
    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import {writable as localStorageWritable} from "svelte-local-storage-store";

    const naturalName = localStorageWritable("NATURAL_NAME", "");
    const callSign = localStorageWritable("CALL_SIGN", "");
    const licenseType = localStorageWritable("LICENSE_TYPE", "");
    const theme = localStorageWritable("APP_THEME", "system");

    const appSettings = writable({
        naturalName,
        callSign,
        licenseType,
        theme,
    });

    setContext("appSettings", appSettings);

</script>
<slot/>