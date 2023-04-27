const people = [
    {
        name: 'bob',
        location: {
            street: '123 main street',
            timezone: {offset: '+7:00'}
        }
    },
    {
        name: 'peter',
        location: {
            street: '123 Pine street',
        }
    },
    {
        name: 'susan',
        location: {
            street: '123 apple street',
            timezone: {offset: '+9:00'}
        }
    }
]
people.forEach((person)=>{
    console.log(person.name)
    // with and operator
    console.log(person.location && person.location.timezone && person.location.timezone.offset)
    console.log('-------')
    // with optional chainning which offer us better synthax
    console.log(person?.location?.timezone?.offset ||'default value')
})