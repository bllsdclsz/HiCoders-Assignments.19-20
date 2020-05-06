class Otomat {
    addToDom(pCandy, pCandyPrice, pBag, pTotal) {
        let otomat = `<h1>Candy Shop of Ferruh Candy</h1>`
        otomat += `<div class="container">
                <div class="row">
                <div class="card col-12">
                <div class="card-body">
                <form class="form">
                <label for="candy-options" class="card-text">Choose a candy</label>
                <select>`
        pCandy.map((item) => {
            otomat += `<option>${item.name}</option>`
        }).join("");

        otomat += ` </select>
                    <label for="Number of candy" class="card-text">How many candy do you want?</label>
                    <input type="number" id="number">
                    <input type="button" class="btn btn-primary" id="add-box" value="Add to Box">
                    </form>
                    </div>
                    </div>
                    <div class="col-8 mt-3">
                    <ul id="order-list" class="list-group"></ul>
                    </div>
                    <div class="col-4 mt-3">
                    <table class="table table-striped table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Candy Price</th>
                            <th>Bag Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${pCandyPrice}</td>
                            <td>${pBag}</td>
                            <td>${pTotal}</td>
                        </tr>
                    </tbody>
                    </table>
                    <input type="button" class="btn btn-primary" id="pay-order" value="Pay Order">
                    </div>
                    </div>
        </div>`

        document.querySelector("candyshop").innerHTML = otomat;
    }

    addToList() {
        let selectedItem = document.querySelector("select").selectedIndex;
        let list = `<li class="list-group-item">${document.querySelector("#number").value}\n-\n
                                                ${document.querySelector("select").options[selectedItem].text}
                    </li>`
        document.querySelector("#order-list").innerHTML += list;
        return [document.querySelector("#number").value, document.querySelector("select").options[selectedItem].text, ]  
    }
}