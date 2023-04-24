import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/Selectinput"
import { Container } from './styles'

const Dashboard: React.FC = () => {
    const options = [
        { value: 'Janeiro', label: 'Janeiro' },
        { value: 'Fevereiro', label: 'Fevereiro' },
        { value: 'Março', label: 'Março' }
    ]

    return (
        <Container>
            <ContentHeader 
                title="Deashboard"
                lineColor="#f7931b"
            >
                <SelectInput
                    options={options}
                />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard