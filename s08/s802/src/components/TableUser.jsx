import Table from "./Table"

export default function TableUser() {

    return (
        <Table 
            columns={["A", "B", "C"]}
            rows={[
                {
                    "A": 1,
                    "B": 2,
                    "C": 3
                },
                {
                    "A": 4,
                    "B": 5,
                    "C": 6
                },
                {
                    "A": "Hola",
                    "B": "Mundo",
                    "C": "???"
                },
            ]}
        />
    )

}