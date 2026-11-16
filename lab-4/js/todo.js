window.onload = function() {
    document.querySelector('#push').onclick = function() {
        if(document.querySelector('#newtask input').value.length == 0) {
            alert("Пожалуйста, введите название задачи!");
        } else {
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="delete">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                    </button>
                </div>
            `;
            
            // Очищаем поле ввода после добавления
            document.querySelector('#newtask input').value = "";

            var current_tasks = document.querySelectorAll(".delete");
            for(var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function() {
                    this.parentNode.remove();
                }
            }
        }
    }
}