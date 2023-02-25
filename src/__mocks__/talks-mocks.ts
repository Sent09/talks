import { Talk } from '../features/talks/domain/talk'

export const TalksMock: Talk[] = [
    {
        title: 'Introducción',
        speaker: {
            id: 1,
            name: 'David Fernández García',
        },
        hour: {
            start: '09:00',
            end: '10:00',
        },
        topic: {
            id: 1,
            title: 'General',
        },
        hall: {
            id: 1,
            name: 'Sala 1',
        },
    },
    {
        title: '¡Pasate a Micronaut!',
        speaker: {
            id: 2,
            name: 'Miguel Ángel Pérez Muñoz',
        },
        hour: {
            start: '10:00',
            end: '11:00',
        },
        topic: {
            id: 2,
            title: 'Backend',
        },
        hall: {
            id: 1,
            name: 'Sala 1',
        },
    },
    {
        title: 'La revolución de GraalVM',
        speaker: {
            id: 3,
            name: 'Lucas Élices Alonso',
        },
        hour: {
            start: '11:00',
            end: '13:00',
        },
        topic: {
            id: 3,
            title: 'DevOps',
        },
        hall: {
            id: 1,
            name: 'Sala 1',
        },
    },
    {
        title: 'Vue VS. el resto de escoria',
        speaker: {
            id: 4,
            name: 'Iñaki Heras Torrosa',
        },
        hour: {
            start: '10:00',
            end: '11:00',
        },
        topic: {
            id: 4,
            title: 'Frontend',
        },
        hall: {
            id: 2,
            name: 'Sala 2',
        },
    },
    {
        title: 'Brujería con Typescript',
        speaker: {
            id: 5,
            name: 'Mario Fernández Tapia',
        },
        hour: {
            start: '11:00',
            end: '12:00',
        },
        topic: {
            id: 4,
            title: 'Frontend',
        },
        hall: {
            id: 2,
            name: 'Sala 2',
        },
    },
    {
        title: 'Kubernetes para Dummies',
        speaker: {
            id: 6,
            name: 'Lucía Castro de la Torre',
        },
        hour: {
            start: '12:00',
            end: '13:00',
        },
        topic: {
            id: 3,
            title: 'DevOps',
        },
        hall: {
            id: 2,
            name: 'Sala 2',
        },
    },
]
