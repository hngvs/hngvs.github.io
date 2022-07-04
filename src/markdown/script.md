<script>
import {onMount, getContext} from "svelte"; 

const appSettings = getContext("appSettings");

const {naturalName, callSign, licenseType} = $appSettings;

const defaultCallSign = "STATION CALL SIGN";
const defaultNaturalName = "YOUR NAME";
const defaultLicenseType = "GMRS";

const date = new Date();
const timeOptions = {
            hour: '2-digit',
            minute:'2-digit',
            hour12: false,
        };
let time = date.toLocaleString('en-US', timeOptions).replace(/:/g,'');

	onMount(() => {
		const interval = setInterval(() => {
            const date = new Date();
			time = date.toLocaleString('en-US', timeOptions).replace(/:/g,'')
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
const setLicenseTypeGMRS = () => {
licenseType.set("GMRS")
}
const setLicenseTypeHAM = () => {
licenseType.set("HAM")
}
</script>

## Net Script

### Configuration
<span class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" on:click={setLicenseTypeGMRS} class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-500 hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 {$licenseType === "GMRS" || $licenseType === "" ? "bg-indigo-500 text-white" : ""}">GMRS</button>
  <button type="button" on:click={setLicenseTypeHAM} class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-500 hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 {$licenseType === "HAM" ? "bg-indigo-500 text-white" : ""}">HAM</button>
</span>
<div>
  <label for="naturalName" class="block text-sm font-medium text-gray-700">Your Name</label>
  <div class="mt-1">
    <input bind:value={$naturalName} type="text" name="naturalName" id="naturalName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="{defaultNaturalName}">
  </div>
</div>
<div>
  <label for="callSign" class="block text-sm font-medium text-gray-700">Station Call Sign</label>
  <div class="mt-1">
    <input bind:value={$callSign} type="text" name="callSign" id="callSign" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="{defaultCallSign}">
  </div>
</div>

### Script

Calling the Henderson Nevada Green Valley Stake of The Church of Jesus Christ of Latter-day Saints Emergency
Communication Net. This is net control station **_
{$callSign || defaultCallSign},_** and my name is **_{$naturalName || defaultNaturalName}_**.

The purpose of this net is to provide emergency communications training for **_{$licenseType || defaultLicenseType}_** radio operators in the
Henderson, Nevada Green Valley Stake of The Church of Jesus Christ of Latter-day Saints and to announce activities and
events of local preparedness organizations.

This net is open to all **_{$licenseType || defaultLicenseType}_** radio operators, and all are encouraged to participate.

This is a directed net. Please transmit only as directed by the Net Control Station. All stations checking in are asked
to remain on frequency until released by the Net Control Station. You may request permission to transmit by giving the
last two or three letters of your call sign during a pause in the net. We use the ARRL standard for the word **BREAK **
for priority and emergency traffic only.

Is there any emergency or priority traffic for the net? Please call now.

To begin the net this evening, we will start with check-ins.

Check-ins will be taken in the following format: key your mic when ready and give your call sign slowly using standard
phonetics, your name, ward or unit, current location, and indicate whether you have any traffic for the net. After three
or four check-ins, please pause while I acknowledge the calling station and ask for corrections.

Any stations wishing to check in the net this evening, please call now.

[ ...Take check-ins ]

Thank you to all for checking in, and welcome to the net.

This is **_{$callSign || defaultCallSign}_**, Net Control Station for the Henderson Nevada Green Valley Stake of The Church of Jesus Christ
of Latter-day Saints.

Announcements:

Stations with traffic:

Training item:

Any other questions or comments for the net:

Late check-ins:

This is **_{$callSign || defaultCallSign}_**, Net Control Station for the Henderson Nevada Green Valley Stake of The Church of Jesus Christ
of Latter-day Saints, closing the net at **_{time} hrs_**. All stations have
permission to close. Good evening and 73s. **_
{$callSign || defaultCallSign}_**
