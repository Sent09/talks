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
