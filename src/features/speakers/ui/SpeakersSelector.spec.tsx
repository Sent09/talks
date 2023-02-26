import 'reflect-metadata'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useGetSpeakers } from './hooks/useGetSpeakers'
import SpeakersSelector from './SpeakersSelector'

jest.mock('./hooks/useGetSpeakers')

const setup = (filled = true) => {
    const setSelectedSpeaker = jest.fn()

    const ResultExample = [
        {
            id: 1,
            name: 'David Fernández García',
        },
        {
            id: 2,
            name: 'Miguel Ángel Pérez Muñoz',
        },
    ]

    ;(useGetSpeakers as jest.Mock).mockReturnValue({
        selectOptions: filled ? ResultExample : [],
    })

    render(<SpeakersSelector setSelectedSpeaker={setSelectedSpeaker} />)

    return {
        setSelectedSpeaker,
    }
}

describe('<SpeakersSelector />', () => {
    it('should return the selector with only the default option', () => {
        setup(false)
        expect(screen.getAllByRole('option').length).toBe(1)
    })

    it('should return the selector with more than 1 option', () => {
        setup()
        expect(screen.getAllByRole('option').length).toBeGreaterThan(1)
    })

    it('should call the function when select changes', () => {
        const { setSelectedSpeaker } = setup()

        const Select = screen.getByTestId('speaker-selector')
        fireEvent.change(Select, { target: { value: 2 } })

        expect(setSelectedSpeaker).toHaveBeenCalled()
    })
})
