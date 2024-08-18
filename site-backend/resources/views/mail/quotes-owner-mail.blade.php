<table style='border:1px;text-align:left;'>
        <tr>
                <th>Name:</th>
                <td>{{ ucwords($details['name']) }}</td>
        </tr>
        <tr>
                <th>Phone:</th>
                <td>{{$details['clientphone']}}</td>
        </tr>
        @if($details['request_url'])
                             <?php $req = explode('/',$details['request_url']);
 if(isset($req[2])){
?> <tr>
                <th>Service:</th>

                <td>{{ $req[2] }}</td>


<td></td>

        </tr><?php } ?>

        @endif
        @if($details['referral_url'])
        <tr>
                <th>Source:</th>
                <td>{{ $details['referral_url'] }}</td>
        </tr>
        @endif
</table>
