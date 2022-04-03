const servicesList = document.querySelectorAll('.services-item');
const servicesDescList = document.querySelectorAll('.services-item-more');

// Трюк для работы indexOf с Node-листом
NodeList.prototype.indexOf = Array.prototype.indexOf;

// Обрабатываем клик по табам сервисов
for (const service of servicesList) {
  service.onclick =  function (evt) {
    evt.preventDefault();
    // определим индекс сервиса в Node-листе
    let index = servicesList.indexOf(service);
    // Проверяем наличие класса active у нажатого таба сервиса
    if (!service.classList.contains('active')) {
      // если класса нет, добавляем, у остальных сервисов - удаляем
      servicesList.forEach(element => {
        if (servicesList.indexOf(element) !== index) {
          element.classList.remove('active');
        }
      });
      service.classList.add('active');
    };
    // Проверяем наличие класса active у описания нажатого сервиса
    if (!servicesDescList[index].classList.contains('active')) {
      // если класса нет, добавляем, у остальных описаний - удаляем
      servicesDescList.forEach(element => {
        if (servicesDescList.indexOf(element) !== index) {
          element.classList.remove('active');
        }
      });
      servicesDescList[index].classList.add('active');
    };
  }
};
