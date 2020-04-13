import React from 'react'
import Logo from '.././Inreach.png';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

export default function Heading() {
    const logo = <img src={Logo} alt="logo" />;
    const Menubuttons = (
        <>
        <Button>About the Inreach</Button>
        <Button>News & Events</Button>
        <Button>Public</Button>
        <Button>Contact us</Button>
        </>
    )
    return (
        <div >
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>{logo}</TableCell>
                        <TableCell align="right">{Menubuttons}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    );
}