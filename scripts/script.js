function toggleAnswer(questionId) {
    const text = document.getElementById(questionId);
    
  
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block'; 
    } else {
        text.style.display = 'none'; 
    }
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const indicator = document.getElementById('indicator');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const contentSee = document.getElementsByClassName('content-text-section-see');
const contentAsk = document.getElementsByClassName('content-text-section-ask');


// Function to apply flash effect
function flashEffect(contentElement) {
    contentElement.classList.add('flash-effect'); 
    setTimeout(() => {
        contentElement.classList.remove('flash-effect');
        }, 500);
}

    btn1.addEventListener('click', () => {
     // Switch active states of buttons
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn1.classList.remove('inactive');
    btn2.classList.add('inactive');
            

            
            // Update indicator text
    indicator.textContent = 'see'; 
            
            // Move the indicator
    indicator.style.left = '5px';
            
            // Flash content and show content1
    flashEffect(content1);
    content1.style.opacity = 1;
    content1.style.visibility = 'visible';
    content2.style.opacity = 0;
    content2.style.visibility = 'hidden';
    contentSee.style.visibility ='visible';
    contentSee.style.opacity = 1;
    contentAsk.style.visibility ='hidden';
    contentAsk.style.opacity = 0;
           
            
        });

    btn2.addEventListener('click', () => {
            // Switch active states of buttons
            btn2.classList.add('active');
            btn1.classList.remove('active');
            btn1.classList.add('inactive');
            btn2.classList.remove('inactive');
            
            // Update indicator text
            indicator.textContent = 'ask'; 
            
            // Move the indicator
            indicator.style.left = '47%';
            
            // Flash content and show content2
            flashEffect(content2);
            content2.style.opacity = 1;
            content2.style.visibility = 'visible';
            content1.style.opacity = 0;
            content1.style.visibility = 'hidden';
            contentAsk.style.visibility ='visible';
            contentAsk.style.opacity = 1;
            contentAsk.style.backgroundColor = 'pink';

            contentSee.style.visibility ='hidden';
            contentSee.style.opacity = 0;
        })

//assistance section toggle
const suggest = document.getElementById('suggest');
const note = document.getElementById('note');
const recall = document.getElementById('recall');
const create = document.getElementById('create');
const indicatorBlue = document.getElementById('indicator-blue');

const contentSuggest = document.getElementById('content-suggest');
const contentNote = document.getElementById('content-note');
const contentRecall = document.getElementById('content-recall');
const contentCreate = document.getElementById('content-create');


function flashEffect(contentElement) {
        contentElement.classList.add('flash-effect'); 
         setTimeout(() => {
             contentElement.classList.remove('flash-effect');
             }, 500); 
}

suggest.addEventListener('click', () => {
        
    suggest.classList.add('active');
    note.classList.remove('active');
    recall.classList.remove('active');
    create.classList.remove('active');

    suggest.classList.remove('inactive');
    note.classList.remove('inactive');
    recall.classList.remove('inactive');
    create.classList.remove('inactive');
  
    indicatorBlue.textContent = 'suggest';  
    indicatorBlue.style.left = '10px';
    
    
    flashEffect(contentSuggest);
  
    contentSuggest.style.opacity = 1;
    contentSuggest.style.visibility = 'visible';
    console.log('suggest');
    contentNote.style.opacity = 0;
    contentNote.style.visibility = 'hidden';
    contentRecall.style.opacity = 0;
    contentRecall.style.visibility = 'hidden';
    contentCreate.style.opacity = 0;
    contentCreate.style.visibility = 'hidden';
  
});

note.addEventListener('click', () => {
        
    note.classList.add('active');
    suggest.classList.remove('active');
    recall.classList.remove('active');
    create.classList.remove('active');

    note.classList.remove('inactive');
    suggest.classList.remove('inactive');
    recall.classList.remove('inactive');
    create.classList.remove('inactive');
    
    indicatorBlue.textContent = 'note';  
    indicatorBlue.style.left = '100px';
    
    flashEffect(contentNote);
    
    contentNote.style.opacity = 1;
    contentNote.style.visibility = 'visible';
    contentSuggest.style.opacity = 0;
    contentSuggest.style.visibility = 'hidden';
    contentRecall.style.opacity = 0;
    contentRecall.style.visibility = 'hidden';
    contentCreate.style.opacity = 0;
    contentCreate.style.visibility = 'hidden';
});
    
   
recall.addEventListener('click', () => {
        
    recall.classList.add('active');
    suggest.classList.remove('active');
    note.classList.remove('active');
    create.classList.remove('active');

    recall.classList.remove('inactive');
    suggest.classList.remove('inactive');
    note.classList.remove('inactive');
    create.classList.remove('inactive');

    indicatorBlue.textContent = 'recall';  
    indicatorBlue.style.left = '200px';

    flashEffect(contentRecall);

    contentRecall.style.opacity = 1;
    contentRecall.style.visibility = 'visible';
    contentSuggest.style.opacity = 0;
    contentSuggest.style.visibility = 'hidden';
    contentNote.style.opacity = 0;
    contentNote.style.visibility = 'hidden';
    contentCreate.style.opacity = 0;
    contentCreate.style.visibility = 'hidden';

    
});

create.addEventListener('click', () => {
        
    create.classList.add('active');
    suggest.classList.remove('active');
    recall.classList.remove('active');
    note.classList.remove('active');

    create.classList.remove('inactive');
    suggest.classList.remove('inactive');
    recall.classList.remove('inactive');
    note.classList.remove('inactive');
    
    indicatorBlue.textContent = 'create';  
    indicatorBlue.style.left = '295px';

    flashEffect(contentCreate);

    contentCreate.style.opacity = 1;
    contentCreate.style.visibility = 'visible';
    contentSuggest.style.opacity = 0;
    contentSuggest.style.visibility = 'hidden';
    contentNote.style.opacity = 0;
    contentNote.style.visibility = 'hidden';
    contentRecall.style.opacity = 0;
    contentRecall.style.visibility = 'hidden';
    
});
