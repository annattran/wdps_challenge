document.addEventListener('DOMContentLoaded', function () {
    const cardData = [
        {
            "type": "buy",
            "amount": 2000,
            "cost": 250.00
        },
        {
            "type": "buy",
            "amount": 4000,
            "cost": 450.00
        },
        {
            "type": "buy",
            "amount": 7000,
            "cost": 600.00
        }
    ]

    cardData.forEach(card => {
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', card.amount);
        radio.setAttribute('name', card.type);
        radio.setAttribute('value', card.cost);

        const label = document.createElement('label');
        label.setAttribute('for', card.amount);
        label.innerHTML = `<span>Buy ${card.amount} miles <span class="price">$${card.cost}.00</span></span>`;

        const radioForm = document.querySelector('form#selection');
        radioForm.append(radio);
        radioForm.append(label);

    })

    const radioButtons = document.querySelectorAll('#selection input[type="radio"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function (event) {
            const miles = event.target.id;
            const price = parseFloat(event.target.value);
            const tax = parseFloat(document.querySelector('#tax').innerText.replace(/\$|,/g, ''));
            const total = (price + tax).toFixed(2)

            document.querySelector('#miles').innerText = miles;
            document.querySelector('#total').innerText = `$${total}`;

        })
    })

    const firstRadio = document.querySelector('form#selection input[type="radio"]:first-of-type')

    firstRadio.nextElementSibling.click();
});