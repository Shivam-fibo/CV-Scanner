console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [

    {
        name: 'Shreya Singh',
        age: 22,
        city: 'Delhi',
        language: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/women/52.jpg'
        },
        {
        name: 'Amit Patel',
        age: 29,
        city: 'Mumbai',
        language: 'Ruby',
        framework: 'Ruby on Rails',
        image: 'https://randomuser.me/api/portraits/men/53.jpg'
        },
        {
        name: 'Priya Verma',
        age: 25,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/women/54.jpg'
        },
        {
        name: 'Ravi Kumar',
        age: 35,
        city: 'Chennai',
        language: 'C++',
        framework: 'Qt',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
        },
        {
        name: 'Riya Sharma',
        age: 28,
        city: 'Jaipur',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/56.jpg'
        },
        {
        name: 'Rahul Gupta',
        age: 31,
        city: 'Hyderabad',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
        },
        {
        name: 'Simran Kaur',
        age: 27,
        city: 'Chandigarh',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/58.jpg'
        },
        {
        name: 'Siddharth Mehta',
        age: 24,
        city: 'Pune',
        language: 'Java',
        framework: 'Hibernate',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
        },
        {
        name: 'Anjali Singh',
        age: 26,
        city: 'Lucknow',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/60.jpg'
        },
        {
        name: 'Alok Yadav',
        age: 32,
        city: 'Ahmedabad',
        language: 'PHP',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
        },
        {
        name: 'Ishaan Gupta',
        age: 23,
        city: 'Surat',
        language: 'JavaScript',
        framework: 'Vue.js',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
        },
        {
        name: 'Ananya Pandey',
        age: 20,
        city: 'Bhopal',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        {
        name: 'Rajat Sharma',
        age: 28,
        city: 'Kanpur',
        language: 'C#',
        framework: '.NET',
        image: 'https://randomuser.me/api/portraits/men/64.jpg'
        },
        {
            name: 'Nikhil Shah',
            age: 30,
            city: 'Ahmedabad',
            language: 'JavaScript',
            framework: 'React',
            image: 'https://randomuser.me/api/portraits/men/66.jpg'
            },
            {
            name: 'Tanvi Singh',
            age: 25,
            city: 'Pune',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/women/67.jpg'
            },
            {
            name: 'Rakesh Patel',
            age: 27,
            city: 'Mumbai',
            language: 'Java',
            framework: 'Spring',
            image: 'https://randomuser.me/api/portraits/men/68.jpg'
            },
            {
            name: 'Kriti Sharma',
            age: 23,
            city: 'Delhi',
            language: 'Python',
            framework: 'Flask',
            image: 'https://randomuser.me/api/portraits/women/69.jpg'
            },
            {
            name: 'Vikas Kumar',
            age: 32,
            city: 'Chennai',
            language: 'JavaScript',
            framework: 'Angular',
            image: 'https://randomuser.me/api/portraits/men/70.jpg'
            },
            {
            name: 'Sanjana Singh',
            age: 24,
            city: 'Lucknow',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/women/71.jpg'
            },
            {
            name: 'Varun Gupta',
            age: 29,
            city: 'Hyderabad',
            language: 'C++',
            framework: 'Qt',
            image: 'https://randomuser.me/api/portraits/men/72.jpg'
            },
            {
            name: 'Sakshi Sharma',
            age: 26,
            city: 'Jaipur',
            language: 'Python',
            framework: 'Flask',
            image: 'https://randomuser.me/api/portraits/women/73.jpg'
            },
            {
            name: 'Abhishek Choudhary',
            age: 33,
            city: 'Bangalore',
            language: 'Java',
            framework: 'Hibernate',
            image: 'https://randomuser.me/api/portraits/men/74.jpg'
            },
            {
            name: 'Jyoti Singh',
            age: 28,
            city: 'Chandigarh',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/women/75.jpg'
            },
            {
            name: 'Sushant Shah',
            age: 31,
            city: 'Mumbai',
            language: 'JavaScript',
            framework: 'React',
            image: 'https://randomuser.me/api/portraits/men/76.jpg'
            },
            {
            name: 'Neha Gupta',
            age: 27,
            city: 'Delhi',
            language: 'Python',
            framework: 'Flask',
            image: 'https://randomuser.me/api/portraits/women/77.jpg'
            },
            {
            name: 'Kunal Singh',
            age: 29,
            city: 'Pune',
            language: 'Java',
            framework: 'Spring',
            image: 'https://randomuser.me/api/portraits/men/78.jpg'
            }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
