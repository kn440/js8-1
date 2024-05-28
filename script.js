 
 var classesData = [
    {
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "name": "Фитнес",
        "time": "12:00 - 13:00",
        "maxParticipants": 15,
        "currentParticipants": 10
    }
    
];


function createClassCard(classData) {
    var card = document.createElement('div');
    card.className = 'card class-card';

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = classData.name;

    var time = document.createElement('p');
    time.className = 'card-text';
    time.textContent = 'Время: ' + classData.time;

    var participants = document.createElement('p');
    participants.className = 'card-text';
    participants.textContent = 'Участники: ' + classData.currentParticipants + '/' + classData.maxParticipants;

    var button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Записаться';
    if (classData.currentParticipants >= classData.maxParticipants) {
        button.disabled = true;
    }
    button.addEventListener('click', function() {
        if (classData.currentParticipants < classData.maxParticipants) {
            classData.currentParticipants++;
            participants.textContent = 'Участники: ' + classData.currentParticipants + '/' + classData.maxParticipants;
            button.disabled = true;
            cancelButton.disabled = false;
        }
    });

    var cancelButton = document.createElement('button');
    cancelButton.className = 'btn btn-danger ml-2';
    cancelButton.textContent = 'Отменить запись';
    cancelButton.disabled = true;
    cancelButton.addEventListener('click', function() {
        if (classData.currentParticipants > 0) {
            classData.currentParticipants--;
            participants.textContent = 'Участники: ' + classData.currentParticipants + '/' + classData.maxParticipants;
            button.disabled = false;
            cancelButton.disabled = true;
        }
    });

    cardBody.appendChild(title);
    cardBody.appendChild(time);
    cardBody.appendChild(participants);
    cardBody.appendChild(button);
    cardBody.appendChild(cancelButton);

    card.appendChild(cardBody);

    return card;
}


function displayClasses() {
    var classesContainer = document.getElementById('classes');
    classesData.forEach(function(classData) {
        var card = createClassCard(classData);
        classesContainer.appendChild(card);
    });
}


window.onload = displayClasses;
