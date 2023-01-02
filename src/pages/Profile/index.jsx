import React from 'react';
import styles from "./styles.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Название товара</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Категория</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Добавить поле характеристик</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Подробное описание товара</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Slider</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Цена от</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Цена до</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Дата получения</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Желаемое количество</Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>Адрес доставки</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Состояние</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Создать запрос</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Загрузить документ</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Загрузить фото</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile;
