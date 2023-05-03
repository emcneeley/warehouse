

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

function drawPackages(packages) {
    let packageElements = document.getElementById('allPackages')
    let template = ''
    packages.forEach(p => {
        template += `
        <div class="col-10 text-white d-flex justify-content-between bg-black mb-4">
                <p>TO: ${p.to}</p>
                <p>ID: ${p.trackingNumber}</p>
            </div>
        `
    })
    packageElements.innerHTML = template
}


function sortByWeight() {
    let heavyPackages = packages.filter(package => package.weight >= 5)
    console.log(heavyPackages)
    drawPackages(heavyPackages)
}

function fragilePackage() {
    let fragilePackage = packages.filter(p => p.isFragile == true)
    console.log(fragilePackage)
    drawPackages(fragilePackage)
}
// write three functions for standard, free, and express
function filterByPriorityExpress() {
    let filteredExpress = packages.filter(p => p.priorityLevel == 'express')
    console.log(filteredExpress)
    drawPackages(filteredExpress)

}

function filterByPriorityStandard() {
    let filteredStandard = packages.filter(p => p.priorityLevel == 'standard')
    console.log(filteredStandard)
    drawPackages(filteredStandard)
}
function filterByPriorityFree() {
    let filteredFree = packages.filter(p => p.priorityLevel == 'free')
    console.log(filteredFree)
    drawPackages(filteredFree)
}


drawPackages(packages)


