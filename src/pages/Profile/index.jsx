import React from 'react';
import styles from "./styles.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CategorySelect from '../../components/CategorySelect';
import State from '../../components/State';
import DatePickers from '../../components/DatePicker';
import RangeSlider from '../../components/PriceSlider';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Profile() {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <h2>Создание запроса</h2>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <TextField className="input" id="outlined-basic" label="Название товара" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <CategorySelect />
                </Grid>
                <Grid item xs={12}>
                <Button color="primary">+ Добавить поле характеристик</Button>
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    className="input"
                    label="Подробное описание товара"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12}>
                    <RangeSlider />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        className="input"
                        id="outlined-number"
                        label="Цена от"
                        type="number"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        className="input"
                        id="outlined-number"
                        label="Цена до"
                        type="number"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <DatePickers />
                </Grid>
                <Grid item xs={3}>
                <TextField
                    className="input"
                    id="outlined-number"
                    label="Желаемое количество"
                    type="number"
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={9}>
                    <TextField className="input" id="outlined-basic" label="Адрес доставки" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <State />
                </Grid>
                <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  Создать запрос
                </Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" color="primary" component="span">
                    Загрузить документ
                </Button>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Загрузить фото</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile;
