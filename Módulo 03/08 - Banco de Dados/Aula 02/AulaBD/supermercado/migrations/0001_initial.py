# Generated by Django 5.0.4 on 2024-05-03 13:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('data_nasc', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Documentos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cpf', models.PositiveIntegerField()),
                ('rg', models.FileField(upload_to='rg')),
                ('cliente', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='supermercado.clientes')),
            ],
        ),
        migrations.CreateModel(
            name='Produtos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('marca', models.CharField(max_length=50)),
                ('estoque', models.IntegerField()),
                ('valor', models.FloatField()),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='supermercado.categorias')),
            ],
        ),
        migrations.CreateModel(
            name='OrdemCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='supermercado.clientes')),
                ('produtos', models.ManyToManyField(to='supermercado.produtos')),
            ],
        ),
    ]
