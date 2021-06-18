;(function(){
    'use strict'

    // Initialize the view API
    const api = {
        // Method that registers the click on the DOM element
        clickHandler: ()=>{},
    };
    window.view = api;

    // Method to get the card by the number
    api.getPlate = (number, data) => {
        let plateElement = null;

        switch(number){
            case 1: plateElement = stringToDom(template1);
                break
            case 2: plateElement = stringToDom(template2);
				if(data.item){
					const inpElement = plateElement.querySelector(`input[value='${data.item}']`)
					inpElement.setAttribute(`checked`, true);
					inpElement.parentElement.classList.add('radio-block--active');
				}
				break
            case 3: plateElement = stringToDom(template3);
				if(data.items){
					for(let i = 0 ; i < data.items.length ; i++){
						const selectedElement = plateElement.querySelector(`input[value='${data.items[i]}']`);
						selectedElement.setAttribute(`checked`, true);
						selectedElement.parentElement.classList.add(`checkbox-block--active`);
					}
				}
                break
            case 4: plateElement = stringToDom(template4);
                break
            case 5: plateElement = stringToDom(template5);
                break
            case 6: plateElement = stringToDom(template6);
                break
        }

        // If switch did not work
        if(!plateElement){
            return null
        }

        // NodeList of all clickable elements
        const clickableElements = plateElement.querySelectorAll('a.button, input');

        for(let i = 0 ; i < clickableElements.length ; i++){
            const element = clickableElements[i];

            element.addEventListener('click', function(event){
                api.clickHandler(this, event)
            })
        }

        return plateElement
    };

    // Helper function to parse the string to the DOM
    function stringToDom(string){
        const wrapper = document.createElement('div');
        wrapper.innerHTML = string;
        
        return wrapper.firstElementChild
    }; 

    // Templates for the different cards
    const template1 = `
    <div class="plate">
		<div class="cover-content-wrapper">
			<div class="cover-content">
				<img class="title-img" src="img/pictures/html.png" alt="HTML">
				<div class="title">Определи свой уровень знания верстки сайтов</div>
				<p>Ответь на серию вопросов, получи оценку знаний, список уроков чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
				<a href="#" class="button">Пройти тест</a>
			</div>
		</div>
	</div>
    `; 

    const template2 = `
    <div class="plate">

		<!-- plate-header -->
		<div class="plate-header">
			<div class="plate-header__icon">
				<img src="img/icons/list.png" alt="Icon">
			</div>
			<div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
		</div>
		<!-- // plate-header -->

		<!-- Content ... -->
		<div class="plate-content">
			<h2 class="title-main">Что означает сокращение HTML?</h2>
			<div class="radio-group">
				<!-- radio-block -->
				<label class="radio-block">
					<input type="radio" name="radio-group" class="radio-block__real" value="Hero Tutorial Multi Level">
					<div class="radio-block__fake"></div>
					<div class="radio-block__text">Hero Tutorial Multi Level</div>
				</label>
				<!-- // radio-block -->
				<!-- radio-block -->
				<label class="radio-block">
					<input type="radio" name="radio-group" class="radio-block__real" value="Hyper Text Markup Language">
					<div class="radio-block__fake"></div>
					<div class="radio-block__text">Hyper Text Markup Language</div>
				</label>
				<!-- // radio-block -->
				<!-- radio-block -->
				<label class="radio-block">
					<input type="radio" name="radio-group" class="radio-block__real" value="High Task Mirage Language">
					<div class="radio-block__fake"></div>
					<div class="radio-block__text">High Task Mirage Language</div>
				</label>
				<!-- // radio-block -->
				<!-- radio-block -->
				<label class="radio-block">
					<input type="radio" name="radio-group" class="radio-block__real" value="HTML не имеет расшифровки.">
					<div class="radio-block__fake"></div>
					<div class="radio-block__text">HTML не имеет расшифровки. Это военная разработка.</div>
				</label>
				<!-- // radio-block -->
			</div>
		</div>

		<!-- plate-footer -->
		<div class="plate-footer">
			<div class="plate-footer__progress">

				<div class="progress">
					<div class="progress__label">
						Готово: <strong>56%</strong>
					</div>
					<div class="progress__line-wrapper">
						<div class="progress__line-bar" style="width: 56%;"></div>
					</div>
				</div>

			</div>
			<div class="plate-footer__buttons">
				<a href="#" class="button button--back">Назад</a>
				<a href="#" class="button">Далее</a>
			</div>
		</div>
		<!-- // plate-footer -->

	</div>
    `;

    const template3 = `
    <div class="plate">

		<!-- plate-header -->
		<div class="plate-header">
			<div class="plate-header__icon">
				<img src="img/icons/list.png" alt="Icon">
			</div>
			<div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
		</div>
		<!-- // plate-header -->

		<!-- Content ... -->
		<div class="plate-content">
			<h2 class="title-main">Что означает сокращение HTML?</h2>
			<div class="checkbox-group">
				<!-- checkbox-block -->
				<label class="checkbox-block">
					<input type="checkbox" name="radio-group" class="checkbox-block__real" value="Hero Tutorial Multi Level">
					<div class="checkbox-block__fake"></div>
					<div class="checkbox-block__text">Hero Tutorial Multi Level</div>
				</label>
				<!-- // checkbox-block -->
				<!-- checkbox-block -->
				<label class="checkbox-block">
					<input type="checkbox" name="radio-group" class="checkbox-block__real" value="Hyper Text Markup Language">
					<div class="checkbox-block__fake"></div>
					<div class="checkbox-block__text">Hyper Text Markup Language</div>
				</label>
				<!-- // checkbox-block -->
				<!-- checkbox-block -->
				<label class="checkbox-block">
					<input type="checkbox" name="radio-group" class="checkbox-block__real" value="High Task Mirage Language">
					<div class="checkbox-block__fake"></div>
					<div class="checkbox-block__text">High Task Mirage Language</div>
				</label>
				<!-- // checkbox-block -->
				<!-- checkbox-block -->
				<label class="checkbox-block">
					<input type="checkbox" name="radio-group" class="checkbox-block__real" value="HTML не имеет расшифровки.">
					<div class="checkbox-block__fake"></div>
					<div class="checkbox-block__text">HTML не имеет расшифровки. Это военная разработка.</div>
				</label>
				<!-- // checkbox-block -->
			</div>
		</div>

		<!-- plate-footer -->
		<div class="plate-footer">
			<div class="plate-footer__progress">

				<div class="progress">
					<div class="progress__label">
						Готово: <strong>56%</strong>
					</div>
					<div class="progress__line-wrapper">
						<div class="progress__line-bar" style="width: 56%;"></div>
					</div>
				</div>

			</div>
			<div class="plate-footer__buttons">
				<a href="#" class="button button--back">Назад</a>
				<a href="#" class="button">Далее</a>
			</div>
		</div>
		<!-- // plate-footer -->

	</div>
    `;

    const template4 = `
    <div class="plate">

		<!-- plate-header -->
		<div class="plate-header">
			<div class="plate-header__icon">
				<img src="img/icons/list.png" alt="Icon">
			</div>
			<div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
		</div>
		<!-- // plate-header -->

		<!-- Content ... -->
		<div class="plate-content">
			<h2 class="title-main">На HTML можно создавать:</h2>

			<div class="cards-group">
				<!-- card-block -->
				<label class="card-block">
					<div class="card-block__radio">
						<input name="image-group" type="radio" class="card-block__radio-real">
						<div class="card-block__radio-fake"></div>
					</div>
					<div class="card-block__radio"></div>
					<div class="card-block__img">
						<img src="img/pictures/mobile.jpg" alt="Img">
					</div>
					<div class="card-block__text">
						Мобильные приложения
					</div>
				</label>
				<!-- // card-block -->
				<!-- card-block -->
				<label class="card-block">
					<div class="card-block__radio">
						<input name="image-group" type="radio" class="card-block__radio-real">
						<div class="card-block__radio-fake"></div>
					</div>
					<div class="card-block__img">
						<img src="img/pictures/browser.jpg" alt="Img">
					</div>
					<div class="card-block__text">
						Сайты для всех браузеров и платформ
					</div>
				</label>
				<!-- // card-block -->
				<!-- card-block -->
				<label class="card-block">
					<div class="card-block__radio">
						<input name="image-group" type="radio" class="card-block__radio-real">
						<div class="card-block__radio-fake"></div>
					</div>
					<div class="card-block__radio"></div>
					<div class="card-block__img">
						<img src="img/pictures/windows.jpg" alt="Img">
					</div>
					<div class="card-block__text">
						Программы для Windows
					</div>
				</label>
				<!-- // card-block -->
				<!-- card-block -->
				<label class="card-block">
					<div class="card-block__radio">
						<input name="image-group" type="radio" class="card-block__radio-real">
						<div class="card-block__radio-fake"></div>
					</div>
					<div class="card-block__radio"></div>
					<div class="card-block__img">
						<img src="img/pictures/linux.jpg" alt="Img">
					</div>
					<div class="card-block__text">
						Программы для Linux
					</div>
				</label>
				<!-- // card-block -->
			</div>


		</div>

		<!-- plate-footer -->
		<div class="plate-footer">
			<div class="plate-footer__progress">

				<div class="progress">
					<div class="progress__label">
						Готово: <strong>56%</strong>
					</div>
					<div class="progress__line-wrapper">
						<div class="progress__line-bar" style="width: 56%;"></div>
					</div>
				</div>

			</div>
			<div class="plate-footer__buttons">
				<a href="#" class="button button--back">Назад</a>
				<a href="#" class="button">Далее</a>
			</div>
		</div>
		<!-- // plate-footer -->

	</div>
    `;
    
    const template5 = `
    <div class="plate">
		<div class="cover-content-wrapper">
			<div class="cover-content">

				<img class="title-img" width="70" src="img/icons/clapping.svg" alt="Отлично! Последний шаг!">
				<div class="title">Отлично! Последний шаг!</div>

				<div class="form-group">
					<label class="label" for="email">Введите Email:</label>
					<input class="input-email" type="email" id="email" placeholder="Ваш Email">
				</div>

				<input class="button button--huge" type="submit" value="Получить результаты">

				<label class="checkbox">
					<input type="checkbox" class="checkbox__real">
					<div class="checkbox__fake"></div>
					<div class="checkbox__text">С политикой конфеденциальности ознакомлен</div>
				</label>

			</div>
		</div>
	</div>
    `;

    const template6 = `
    <div class="plate">
		<div class="cover-content-wrapper">
			<div class="cover-content">

				<img class="title-img" width="70" src="img/icons/clapping.svg" alt="Спасибо!">
				<div class="title">Спасибо!</div>
				<p>Результаты вашего теста и методичка, уже отправлены вам на Email.</p>
				<div class="title-2">Ваши бонусы:</div>
				<div class="bonus-cards-wrapper">
					<div class="bonus-card">
						<img class="bonus-card__img" src="img/icons/leaflet.svg" alt="">
						<div class="bonus-card__title">Методичка с курса по верстке</div>
					</div>
					<div class="bonus-card">
						<img class="bonus-card__img" src="img/icons/video-tutorial.png" alt="">
						<div class="bonus-card__title">Видео урок с курса по верстке</div>
					</div>
				</div>

			</div>
		</div>
	</div>
    `;

})();