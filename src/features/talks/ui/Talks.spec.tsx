import 'reflect-metadata'
import { act, render, screen, waitFor } from '@testing-library/react'
import { useGetTalks } from './hooks/useGetTalks'
import { Talks } from './Talks'

jest.mock('./hooks/useGetTalks')

describe('<Talks />', () => {
    it('should not have a table', async () => {
        setup(false)
        await waitFor(() => {
            const table = screen.queryByRole('table')
            expect(table).toBeNull()
        })
    })

    it('should have a table when have talks', async () => {
        setup()
        await waitFor(() => {
            const table = screen.queryByRole('table')
            expect(table).toBeTruthy()
        })
    })
})

const setup = async (filled = true) => {
    const Hours = ['09:00', '10:00']
    const TalksMock = [
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
    ]
    const Halls = [
        {
            id: 1,
            name: 'Sala 1',
        },
        {
            id: 2,
            name: 'Sala 2',
        },
    ]

    ;(useGetTalks as jest.Mock).mockReturnValue({
        hours: filled ? Hours : [],
        talks: filled ? TalksMock : [],
        halls: filled ? Halls : [],
    })

    // eslint-disable-next-line testing-library/no-unnecessary-act
    render(<Talks />)
}
/*
import 'reflect-metadata'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TopicsSelector from './TopicsSelector'
import { useGetTopics } from './hooks/useGetTopics'

jest.mock('./hooks/useGetTopics')

const setup = (filled = true) => {
    const setSelectedTopic = jest.fn()

    const ResultExample = [
        {
            id: 1,
            title: 'General',
        },
        {
            id: 2,
            title: 'Backend',
        },
    ];

    (useGetTopics as jest.Mock).mockReturnValue({
        selectOptions: filled ? ResultExample : [],
    })

    render(<TopicsSelector setSelectedTopic={setSelectedTopic} />)

    return {
        setSelectedTopic
    }
}

describe('<TopicsSelector />', () => {
    it('should return the selector with only the default option', () => {
        setup(false)
        expect(screen.getAllByRole('option').length).toBe(1)
    })

    it('should return the selector with more than 1 option', () => {
        setup()
        expect(screen.getAllByRole('option').length).toBeGreaterThan(1)
    })

    it('should call the function when select changes', () => {
        const { setSelectedTopic } = setup()

        const Select = screen.getByTestId('topic-selector')
        fireEvent.change(Select, { target: { value: 2 } })

        expect(setSelectedTopic).toHaveBeenCalled()
    })
})

*/
