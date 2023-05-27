function reload() {

    result.innerHTML = `

<div class="card w-25 container bg-dark text-white">
    <div>
  <h3 class="c30 text-center p-2" style="text-transform: uppercase" id="cname"></h3>
    </div>
    </div>

    <div class="text-center mt-4">
        <table class="bg-dark text-white w-100 border rounded p-5 mt-4">
            <thead>
                <tr>
                    <th class="c6 c7">NO</th>
                    <th class="c6">UNIVERSITY NAME</th>
                    <th class="c6">UNIVERSITY WEBSITE</th>
                    <th class="c6 c9">DOMAIN</th>
                </tr>
            </thead>
            <tbody id="result1" >

            </tbody>
        </table>
    </div>
`
}


function displayPlace() {
    place = pname.value
    fetch(`http://universities.hipolabs.com/search?country=${place}`).then(data => data.json()).then(data => displayData(data)).catch(e => displayError())
}


function displayData(pData) {
    cname.innerHTML = pData[0].country
    let n=0
    for (i of pData) {   
        n++
        result1.innerHTML += `
        <tr>
            <td class='c6 c7 border text-start ps-2'>${n}</td>
            <td class='c6 border text-start ps-2'>${i.name}</td>
            <td class='c6 border text-start ps-2'><a style="text-decoration: none;" href="${i.web_pages}">${i.web_pages}</a></td>
            <td class='c6  c9 border text-start ps-2'>${i.domains}</td>
        </tr>
        `
        
    }


}

function displayError(){
    result.innerHTML = `

    <div class="text-light c10 container p-3 text-center mt-5" style = "background-color: rgba(0, 0, 0, 0.738); border-radius: 10px; border: white 1px solid;" >
        <div>
            <h3 class="c40 pt-3" ><strong> check if the spelling of the country is correct?? </strong></h3>
        </div>
    </div> `

}


