import { Container, Content, Filters } from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/Selectinput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

const List: React.FC = () => {
    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' }
    ]
    const years = [
        { value: 2023, label: 2023 },
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 }
    ]

    return (
        <Container>
            <ContentHeader
                title="Saídas"
                lineColor="#e44c4e"
            >
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent ">
                        Recorrents
                </button>
                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor='#e44c4e'
                    title="Aguá"
                    subtitle="10/10/2023"
                    amount="R$ 100,00"
                />
            </Content>
        </Container>
    )
}

export default List