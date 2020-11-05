import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

function CountryDetail(props) {
    const columns = [{
        dataField: 'name',
        text: 'Country Name',
        classes: 'country-column'
    }, {
        dataField: 'alpha3Code',
        text: 'Code'
    }, {
        dataField: 'population',
        text: 'Population',
        sort: true,
        searchable: false,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;Desc/Asc</span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;desc/<font color="blue">asc</font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="blue">desc</font>/asc</span>);
            return null;
        } 
    }];
    const defaultSorted = [{
        dataField: 'population',
        order: 'desc'
    }];
    const { SearchBar } = Search;
    const expandRow = {
        renderer: row => (
            <div>
                <p>{`Capital City: ${row.capital}`}</p>
                <p>{`Language: ${row.languages[0].name}`}</p>
                <p>{`Currency: ${row.currencies[0].name}`}</p>
            </div>
        ),
        showExpandColumn: true
    };
    const rowStyle = (row, rowIndex) => {
        row.index = rowIndex;
        const style = {};
        if (rowIndex % 2 === 0) {
          style.backgroundColor = 'transparent';
        } else {
          style.backgroundColor = 'rgba(54, 163, 173, .10)';
        }
        style.borderTop = 'none';
    
        return style;
    }

    return (
        <div>
            <ToolkitProvider
                keyField="name"
                data={props.countryList}
                columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <br />
                            <SearchBar {...props.searchProps} />
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                                rowStyle={rowStyle}
                                defaultSorted={defaultSorted}
                                expandRow={expandRow}
                                striped
                                hover
                                condensed
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    );
}

export default CountryDetail;