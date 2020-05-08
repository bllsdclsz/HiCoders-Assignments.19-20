/**
 * Ekrana otomati ekleyen class.
 */
class Otomat {
    addToDom(pCandyArray) {
        let otomat = `
                    <div class="container">
                        <h1>Candy Shop</h1>
                        <div class="row">
                            <div class="col-6 mt-3" id="otomat">
                                <ul class="list-group">
                                    <input type="button" data-candy id="${pCandyArray[0].name}" class="col-12 btn btn-primary" value="${pCandyArray[0].name}">
                                    <input type="button" data-candy id="${pCandyArray[1].name}" class="col-12 btn btn-danger mt-1" value="${pCandyArray[1].name}">
                                    <input type="button" data-candy id="${pCandyArray[2].name}" class="col-12 btn btn-success mt-1" value="${pCandyArray[2].name}">
                                    <input type="button" data-candy id="${pCandyArray[3].name}" class="col-12 btn btn-warning mt-1" value="${pCandyArray[3].name}">
                                    <input type="button" data-candy id="${pCandyArray[4].name}" class="col-12 btn btn-secondary mt-1" value="${pCandyArray[4].name}">
                                </ul>
                            </div>
                            <div class="col-6" id="payment-container">
                                    <table class="table table-hover table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Candy Names</th>
                                                <th>Candy Pieces</th>
                                                <th>Candy Prices</th>
                                            </tr>
                                        </thead>
                                        <tbody id="order-list">
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>Total</td>
                                                <td></td>
                                                <td id="total-price"></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td><input class="btn btn-primary" type="button" id="payment" value="Pay"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                            </div>
                        </div>
                    </div>
                    `
        document.querySelector("candyshop").innerHTML = otomat;
    }
}